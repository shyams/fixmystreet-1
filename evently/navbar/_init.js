function () {


  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-bars",
      "href": "#/help"
    },
    "icon": "icon-hsh-loupe",
    "title": "Report and FIx",
    "right": {
      "icon": "fa-user",
    }
  }]);
}