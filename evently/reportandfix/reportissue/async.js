function(cb, e, params) {
  var url = '_view/issueCategories?include_docs=true';

  $.getJSON(url, function(data) {
    cb(data);
  })
}