function (data, e, params) {
   var  state = $$(this)
  , config = state.app.ddoc.config
  , southW = L.latLng(-33.3672,17.7306)
  , northE = L.latLng(-32.6972,18.3555)
  , bounds = L.latLngBounds(southW, northE)
  , map
  , widget = $(this);

  triggerNavbar(widget);
  $('#reportandfix').css('padding-top', '0px');
  $('#map-view').parents().find('#reportandfix').attr('class', "");
  map = L.map('map-view',{
                center: [-32.91959,17.997694],
                  zoom: 10,
               minZoom: 9,
               maxZoom: 18,
             maxBounds: bounds,
              dragging: true,
       scrollWheelZoom: true,
       doubleClickZoom: true,
               boxZoom: true,
              keyboard: true,
           zoomControl: false,
    attributionControl: false
  })
  var url = 'https://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png'
  var tiles = L.tileLayer(url ,{
      reuseTiles: true,
    detectRetina: true
  }).addTo(map)


  // tiles.on('tileerror', function(error, tile) {
  //   streets  = L.tileLayer(, {
  //     id: 'examples.map-i875mjb7'
  //   });
  //   L.control.layers(streets).addTo(map);

  // });
  var LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: "img/marker-shadow.png"
    }
  });

  var marker = new LeafIcon({
    iconUrl: "img/marker-icon.png"
  });

  var rows = data.rows;

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var doc = row.doc;
    var lat = doc.lat;
    var lon = doc.lng;

    L.marker([lat, lon], {icon: marker}).addTo(map)
    .bindPopup("<a href='#/removemapview/issuedetail/"+ doc._id+"' doc-id='"+doc._id+"'><small><b>"+$.prettyDate(doc.opened_at) +" by "+ doc.usr_name+"</b></small><br><span class='label label-primary' id='number'>"+ doc.number +"</span> - <strong>"+doc.cat_name+"</strong><br><small><strong>"+ doc.desc.substring(0, 25)+"...</strong></small></a>");
  }
}

/**
 * [triggerNavbar description]
 * @param  {[type]} widget [description]
 * @return {[type]}        [description]
 */
function triggerNavbar (widget) {
  
  widget.trigger('rendernav', [{ 
    "left": {
      "icon": "fa-chevron-left",
      "href": "#/removemapview/reportandfix/frontpage" 
    },
    "title": "Issues",
    "right": {
      "icon": "fa-user",
      "href": "#/removemapview/profile/mapview"
    } 
  }]);
}