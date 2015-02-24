function (e, params) {
  var success = (params && params.success)? params.success: "";
  var error = (params && params.error)? params.error: "";
  $.couch.session({
    success : function(r) {
      var userCtx = r.userCtx;
      if (userCtx.name) {
        success(userCtx.name);
      } else {
        error();
      }
    }
  });
}