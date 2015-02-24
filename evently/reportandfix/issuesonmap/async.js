function (cb, e, params) {
  var url = '_view/issues?include_docs=true';

  $.getJSON(url, function (data) {
    cb(data);
  });

  $('#reportandfix').css('padding-top', '0px');
  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-chevron-left",
      "href": "#/removemapview/reportandfix/frontpage" 
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user",
      "href": "#/removemapview/profile/mapview"
    } 
  }]);
}