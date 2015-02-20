function(e) {
  geoLocation();
}

function geoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  $.ajax({
    type: 'GET',
    url: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=false',
    success: function(data) {
      var locationResults = data.results;

      for (var j = 0; j < locationResults.length; ++j) {
        var address = locationResults[j];
        if (address.types.indexOf('street_address') > -1 || address.types.indexOf('route') > -1) {
          $('#place').html(address.formatted_address);
          $('#lat').val(position.coords.latitude);
          $('#lng').val(position.coords.longitude);
          $('.fa-check').addClass('newIssue');
        }
      };
    },
    error: function(req, status, error) {
      console.error('Unable to get geo data:' + error);
    }
  })
}