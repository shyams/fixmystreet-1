function(cb, e, params) {
  var url = '_view/issueCategories';

  $.getJSON(url, function(data) {
    cb(data);
  })
}