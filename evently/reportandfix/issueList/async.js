function (cb, e, params) {
  console.log()
  var url = '_view/issues?include_docs=true';
  var sortedData = {"rows": []};

  $.getJSON(url, function (data) {
    
    var rows = data.rows;
    for (var i = 0; i < rows.length; i++) {
      var doc = rows[i].doc;
      var desc = doc.desc;
      sortedData.rows.push({
        "title": doc.title,
        "opened_at": doc.opened_at,
        "docId": doc._id,
        "category": doc.cat_name,
        "number": doc.number,
        "desc": desc.substring(0, 25),
        "username": doc.usr_name
      })
    };
    sortedData.rows.sort(sortIssuesAccordingToDates);

  }).done(function () {
    cb(sortedData);
  })
}

/**
 * [sortIssuesAccordingToDates sorts the issues according to dates]
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 */
function sortIssuesAccordingToDates (a, b) {
  return new Date(b.opened_at) > new Date(a.opened_at) ? 1 : -1;
}