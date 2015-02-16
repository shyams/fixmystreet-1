function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'" charset="UTF-8"><\/script>')
  };
};

couchapp_load([
  "js/jquery.min.js",
  "js/jquery.couch.js",
  "js/jquery.couch.app.js",
  "js/jquery.couch.app.util.js",
  "js/jquery.mustache.js",
  "js/jquery.evently.js",
  "js/jquery.pathbinder.js",
  "js/bootstrap.min.js",
  "js/leaflet.js"
]);