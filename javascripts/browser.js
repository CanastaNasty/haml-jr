(function() {
  var Gistquire, auth, load, parser, renderJST, rerender, save, styl, util, _ref,
    __slice = [].slice;

  parser = require('./haml-jr').parser;

  _ref = require('./renderer'), renderJST = _ref.renderJST, util = _ref.util;

  Gistquire = require('./gistquire');

  styl = require('styl');

  require('./runtime');

  window.parser = parser;

  window.render = renderJST;

  window.Observable = function(value) {
    var listeners, notify, self;
    listeners = [];
    notify = function(newValue) {
      return listeners.each(function(listener) {
        return listener(newValue);
      });
    };
    self = function(newValue) {
      if (arguments.length > 0) {
        if (value !== newValue) {
          value = newValue;
          notify(newValue);
        }
      }
      return value;
    };
    Object.extend(self, {
      observe: function(listener) {
        return listeners.push(listener);
      },
      each: function() {
        var args, _ref1;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (value != null) {
          return (_ref1 = [value]).each.apply(_ref1, args);
        }
      }
    });
    return self;
  };

  Observable.lift = function(object) {
    var dummy, value;
    if (typeof object.observe === "function") {
      return object;
    } else {
      value = object;
      dummy = function(newValue) {
        if (arguments.length > 0) {
          return value = newValue;
        } else {
          return value;
        }
      };
      dummy.observe = function() {};
      dummy.each = function() {
        var args, _ref1;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (value != null) {
          return (_ref1 = [value]).forEach.apply(_ref1, args);
        }
      };
      return dummy;
    }
  };

  rerender = (function() {
    var ast, coffee, data, error, fragment, haml, selector, style, template, _ref1;
    if (location.search.match("embed")) {
      selector = "body";
    } else {
      selector = "#preview";
    }
    if (!$("#template").length) {
      return;
    }
    _ref1 = editors.map(function(editor) {
      return editor.getValue();
    }), coffee = _ref1[0], haml = _ref1[1], style = _ref1[2];
    try {
      data = Function("return " + CoffeeScript.compile("do ->\n" + util.indent(coffee), {
        bare: true
      }))();
      $("#errors p").eq(0).empty();
    } catch (_error) {
      error = _error;
      $("#errors p").eq(0).text(error);
    }
    try {
      ast = parser.parse(haml + "\n");
      template = Function("return " + render(ast, {
        compiler: CoffeeScript
      }))();
      $("#errors p").eq(1).empty();
      $("#debug code").eq(1).text(template);
    } catch (_error) {
      error = _error;
      $("#errors p").eq(1).text(error);
    }
    try {
      style = styl(style, {
        whitespace: true
      }).toString();
      $("#errors p").eq(2).empty();
    } catch (_error) {
      error = _error;
      $("#errors p").eq(2).text(error);
    }
    if ((template != null) && (data != null)) {
      try {
        fragment = template(data);
        return $(selector).empty().append(fragment).append("<style>" + style + "</style>");
      } catch (_error) {
        error = _error;
        return $("#errors p").eq(1).text(error);
      }
    }
  }).debounce(100);

  save = function() {
    var data, postData, style, template, _ref1;
    _ref1 = editors.map(function(editor) {
      return editor.getValue();
    }), data = _ref1[0], template = _ref1[1], style = _ref1[2];
    postData = JSON.stringify({
      "public": true,
      files: {
        data: {
          content: data
        },
        template: {
          content: template
        },
        style: {
          content: style
        }
      }
    });
    return Gistquire.create(postData, function(data) {
      debugger;
      return location.hash = data.id;
    });
  };

  auth = function() {
    var url;
    url = 'https://github.com/login/oauth/authorize?client_id=bc46af967c926ba4ff87&scope=gist,user:email';
    return window.location = url;
  };

  load = function(id) {
    return Gistquire.get(id, function(data) {
      ["data", "template", "style"].each(function(file, i) {
        var content, editor, _ref1;
        content = ((_ref1 = data.files[file]) != null ? _ref1.content : void 0) || "";
        editor = editors[i];
        editor.setValue(content);
        editor.moveCursorTo(0, 0);
        return editor.session.selection.clearSelection();
      });
      return rerender();
    });
  };

  $(function() {
    var code, id, _ref1;
    window.editors = [["data", "coffee"], ["template", "haml"], ["style", "stylus"]].map(function(_arg) {
      var editor, id, mode;
      id = _arg[0], mode = _arg[1];
      editor = ace.edit(id);
      editor.setTheme("ace/theme/tomorrow");
      editor.getSession().setMode("ace/mode/" + mode);
      editor.getSession().on('change', rerender);
      editor.getSession().setUseSoftTabs(true);
      editor.getSession().setTabSize(2);
      return editor;
    });
    if (code = (_ref1 = window.location.href.match(/\?code=(.*)/)) != null ? _ref1[1] : void 0) {
      $.getJSON('https://hamljr-auth.herokuapp.com/authenticate/#{code}', function(data) {
        var token;
        if (token = data.token) {
          Gistquire.authToken = token;
          return localStorage.authToken = token;
        }
      });
    }
    if (id = location.hash) {
      load(id.substring(1));
    } else {
      rerender();
    }
    if (localStorage.authToken) {
      Gistquire.accessToken = localStorage.authToken;
    }
    $("#actions .save").on("click", save);
    return $("#actions .auth").on("click", auth);
  });

}).call(this);
