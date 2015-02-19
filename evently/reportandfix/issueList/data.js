function (data, e) {
  var viewdata = {"issues": []}
  var rows = data.rows;
  for (var i = 0; i < rows.length; i++) {

    viewdata.issues.push({
      "title": rows[i].title,
      "category": rows[i].category,
      "opened_at": $.prettyDate(rows[i].opened_at),
      "docId":  rows[i].docId,
      "issue_number": rows[i].number,
      "description": rows[i].desc,
      "username": rows[i].username
    })
  };
  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-chevron-left",
      "href": "#/reportandfix" 
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user"
    } 
  }]);
  return viewdata;
}