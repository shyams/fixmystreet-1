function () {
  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-chevron-left",
      "href": "http://www.publicpointer.com"
    },
    "icon": "icon-hsh-loupe",
    "title": "Report and FIx",
    "right": {
      "icon": "fa-user",
      "href": "#/profile"
    }
  }]);
}