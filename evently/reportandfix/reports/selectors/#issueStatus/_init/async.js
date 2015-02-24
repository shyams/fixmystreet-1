function(callback) {
  var  state = $$(this);
  var config = state.app.ddoc.config;

  $.couch.db(config['issue-database']).view(config['issue-design-doc'] + '/issuesByDate', {
    "include_docs": true,
    success: function (data) {
      callback(data);
    },
    error: function (req, status, error) {

    }
  });
}