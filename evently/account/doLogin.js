function(e, name, pass) {
  var elem = $(this);
  $.couch.login({
    name : name,
    password : pass,
    success : function(r) {
      elem.trigger("loggedIn")
    },
    error: function (err, resp, reason) {
      console.log(arguments)
      elem.trigger("loginForm", [{"error": reason}])
    }
  });      
}