function (cb, e, params) {
  var issueId; 
  if (params && params.issueId) {
    issueId = params.issueId;
  } 
  var url = '_view/issues?key="' + issueId + '"&include_docs=true';

  $.getJSON(url, function (data) {
    console.log(data);
    cb(data);
  })
}