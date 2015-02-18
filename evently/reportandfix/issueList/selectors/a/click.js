function (e) {
  var docid = $(this).attr('doc-id');
  $.pathbinder.go('/issuedetail/' + docid);
}