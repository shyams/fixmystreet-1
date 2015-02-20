function (data, e, params) {
  var rows = data.rows;
  var viewdata = {
    "issueCategories": []
  };

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    viewdata.issueCategories.push({
      "cat_id": row.id,
      "cat_name": row.key
    })
  }

  $(this).trigger('rendernav', [{
    "left": {
      "icon": "fa-chevron-left",
      "href": "#/reportandfix"
    },
    "title": "Report Issue",
    "right": {
      "icon": "fa-check",
      "href": "#/saveNewIssue"
    }
  }]);
  return viewdata;
}