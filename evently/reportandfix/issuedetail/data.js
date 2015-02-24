function (data, e, params) {
  var rows = data.rows;
  var viewdata = {
    "issueDetails": []
  };
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var doc = row.doc;
    var image;

    if (doc._attachments) {
      var imageName = 'issue-' + doc.number;
      var attachments = Object.keys(doc._attachments);

      for (var imageKey in attachments ) {
        if (attachments[imageKey].indexOf(imageName) > -1) {
          image = attachments[imageKey];
        }
      };
    }
    
    viewdata.issueDetails.push({
      "description": doc.desc,
      "usr_name": doc.usr_name,
      "issue_id": doc.issue_id,
      "lat": doc.lat,
      "lon": doc.lng,
      "issue_number": doc.number,
      "status": (doc.closed_at) ? "closed" : "in progress",
      "image": (doc._attachments)? doc._id + '/' + image : undefined
      }) 
  };
  $(this).trigger('rendernav', [{ 
    "left": {
      "icon": "fa-chevron-left",
      "href": "javascript:history.back()" 
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user",
      "href": "#/profile"
    } 
  }]);
  return viewdata;
}