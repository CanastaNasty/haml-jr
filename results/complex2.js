(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["complex2"] = function(data) {
    return (function() {
      var __each, __element, __observeAttribute, __observeText, __on, __pop, __push, __with, _ref;
      _ref = Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __observeAttribute = _ref.__observeAttribute, __observeText = _ref.__observeText, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with;
      __push(document.createDocumentFragment());
      __element = document.createElement("html");
      __push(__element);
      __element = document.createElement("head");
      __push(__element);
      __element = document.createElement("title");
      __push(__element);
      __element = document.createTextNode('');
      __observeText(__element, "Ravel | " + this.name + "'s photo tagged " + this.tag);
      __push(__element);
      __pop();
      __pop();
      this.props.__each(function(key, value) {
        __element = document.createElement("meta");
        __push(__element);
        __observeAttribute(__element, "property", key);
        __observeAttribute(__element, "content", value);
        return __pop();
      });
      __element = document.createElement("link");
      __push(__element);
      __observeAttribute(__element, "href", "/images/favicon.ico");
      __observeAttribute(__element, "rel", "icon");
      __observeAttribute(__element, "type", "image/x-icon");
      __pop();
      __element = document.createElement("link");
      __push(__element);
      __observeAttribute(__element, "rel", "stylesheet");
      __observeAttribute(__element, "href", "/stylesheets/normalize.css");
      __pop();
      __element = document.createElement("link");
      __push(__element);
      __observeAttribute(__element, "rel", "stylesheet");
      __observeAttribute(__element, "href", "/stylesheets/bootstrap.min.css");
      __pop();
      __element = document.createElement("link");
      __push(__element);
      __observeAttribute(__element, "rel", "stylesheet");
      __observeAttribute(__element, "href", "/stylesheets/main.css");
      __pop();
      __element = document.createElement("script");
      __push(__element);
      __observeAttribute(__element, "src", "//use.typekit.net/ghp4eka.js");
      __pop();
      
      try{Typekit.load();}catch(e){}
      
      
    ;
      __pop();
      __element = document.createElement("body");
      __push(__element);
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "facebook");
      __element = document.createElement("header");
      __push(__element);
      __element = document.createElement("h1");
      __push(__element);
      __observeAttribute(__element, "class", "hide-text");
      __element = document.createTextNode('');
      __observeText(__element, "Ravel");
      __push(__element);
      __pop();
      __pop();
      __pop();
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "content");
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "container");
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "individual");
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "user-container clearfix");
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "left");
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "user-image");
      __element = document.createElement("img");
      __push(__element);
      __observeAttribute(__element, "src", this.profile_picture_url);
      __pop();
      __pop();
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "user-info");
      __element = document.createElement("span");
      __push(__element);
      __observeAttribute(__element, "class", "name");
      __element = document.createTextNode('');
      __observeText(__element, this.name);
      __push(__element);
      __pop();
      __pop();
      __element = document.createElement("span");
      __push(__element);
      __observeAttribute(__element, "class", "info");
      __element = document.createTextNode('');
      __observeText(__element, this.gender_and_age);
      __push(__element);
      __pop();
      __pop();
      __element = document.createElement("span");
      __push(__element);
      __observeAttribute(__element, "class", "location info");
      __element = document.createTextNode('');
      __observeText(__element, this.location);
      __push(__element);
      __pop();
      __pop();
      __element = document.createElement("span");
      __push(__element);
      __observeAttribute(__element, "class", "tag");
      __element = document.createTextNode('');
      __observeText(__element, this.tag);
      __push(__element);
      __pop();
      __pop();
      __pop();
      __pop();
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "right");
      __element = document.createElement("span");
      __push(__element);
      __observeAttribute(__element, "class", "pins");
      __element = document.createElement("img");
      __push(__element);
      __observeAttribute(__element, "src", "/images/pins@2x.png");
      __pop();
      __element = document.createTextNode('');
      __observeText(__element, this.pins);
      __push(__element);
      __pop();
      __pop();
      __element = document.createElement("span");
      __push(__element);
      __observeAttribute(__element, "class", "likes");
      __element = document.createElement("img");
      __push(__element);
      __observeAttribute(__element, "src", "/images/likes@2x.png");
      __pop();
      __element = document.createTextNode('');
      __observeText(__element, this.likes);
      __push(__element);
      __pop();
      __pop();
      __pop();
      __pop();
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "photo-container");
      __element = document.createElement("img");
      __push(__element);
      __observeAttribute(__element, "src", this.photo_url);
      __pop();
      __pop();
      __pop();
      __element = document.createElement("div");
      __push(__element);
      __observeAttribute(__element, "class", "download-button");
      __element = document.createElement("a");
      __push(__element);
      __observeAttribute(__element, "class", "button appstore");
      __observeAttribute(__element, "href", "http://itunes.apple.com/us/app/ravel!/id610859881?ls=1&mt=8");
      __pop();
      __pop();
      __pop();
      __pop();
      __pop();
      __pop();
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);
