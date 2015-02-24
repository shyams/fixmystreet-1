function (cb, e, params) {
  var url = '_view/issues?include_docs=true';

  $.getJSON(url, function (data) {
    cb(data);
  })  
}