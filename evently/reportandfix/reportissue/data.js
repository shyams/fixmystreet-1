function(data, e, params) {
  var rows = data.rows;
  var viewdata = {
    "issueCategories": []
  };

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var doc = row.doc;
    viewdata.issueCategories.push({
      "cat_id": row.id,
      "cat_name": row.value.name,
      "lat": doc.lat,
      "long": doc.lng
    })
  }

  $(this).trigger('rendernav', [{
    "left": {
      "icon": "fa-chevron-left",
      "href": "#/issuelist"
    },
    "title": "Report Issue",
    "right": {
      "icon": "fa-check",
      "href": "#/saveNewIssue"
    }
  }]);

  return viewdata;
}