function () {
  var  state = $$(this);
  var config = state.app.ddoc.config;
  var southW = L.latLng(-33.3672,17.7306);
  var northE = L.latLng(-32.6972,18.3555);
  var bounds = L.latLngBounds(southW, northE);
  var map;
  var lat = $('#latlon').attr('lat');
  var lon = $('#latlon').attr('lon');
  var LeafIcon = L.Icon.extend({
    options: {
      shadowUrl: "img/marker-shadow.png"
    }
  });
  var marker = new LeafIcon({
    iconUrl: "img/marker-icon.png"
  });
  map = L.map('map',{
                center: [lat, lon],
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

  L.tileLayer(config.PathToMaptiles + '/{z}_{x}_{y}/tile.png',{
      reuseTiles: true,
    detectRetina: true
  }).addTo(map);
  L.marker([lat, lon], {icon: marker}).addTo(map);
}