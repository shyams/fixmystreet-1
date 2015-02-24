function (e) {
  var state = $$("#reportandfix");
    
  $(this).trigger("getSession",[{
    success: function (user) {
      javascript:history.back();
    },
    error: function () {
      $("#account").evently("account", state.app);
      $.evently.connect('#header','#account', ['loggedOut']);
      $.evently.connect('#account','#header', ['rendernav']);
      $.evently.connect('#reportandfix','#account', ['loggedIn']);
      $("#account").trigger("_init");
    }
  }]);
    
  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-times",
      "href": "javascript:history.back()"
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user",
      "href": "#/profile"
    } 
  }]);
  state.viewType = "app";
}