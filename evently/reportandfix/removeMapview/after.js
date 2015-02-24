function (e, params) {
  console.log(params)
  if (!$('#reportandfix').hasClass('col-md-4')) {
    $('#reportandfix').addClass('col-md-4 col-md-offset-4');
    $('#reportandfix').css('padding-top', '50px');
    if (params && params.path) {
      if (params.path === "issuedetail") {
        $.pathbinder.go('/' + params.path + '/' + params.docid);
      } else {
        $.pathbinder.go('/' + params.path);
      }
    } 
  } else {
    var hash = $.pathbinder.currentPath();
    var path = hash.split('/')[1];

    if (path === 'removemapview') {
      javascript:history.go(-1);
    } 
  }
}