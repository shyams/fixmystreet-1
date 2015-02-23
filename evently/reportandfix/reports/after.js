function () {
  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-chevron-left",
      "href": "#/reportandfix" 
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user",
      "href": "#/profile"
    } 
  }]);
}