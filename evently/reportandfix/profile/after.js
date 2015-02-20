function () {
  var state = $$(this);
  $("#account").evently("account", state.app);
  $.evently.connect('#header','#account', ['loggedOut']);
  $.evently.connect('#account','#header', ['rendernav']);
  $.evently.connect('#reportandfix','#account', ['loggedIn']);
  $("#account").trigger("_init");

  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-times",
      "href": "#/reportandfix" 
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user"
    } 
  }]);
}