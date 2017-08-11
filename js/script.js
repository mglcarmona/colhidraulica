var $coolButtonLeft = $('.cool-button .left');
var $coolButtonMiddle = $('.cool-button .middle');
var $coolButtonRight = $('.cool-button .right');


function initMap() {
  var geocoder1 = new google.maps.Geocoder();
  setCenter(geocoder1, 'Av. Ppal de macaracuy multicentro macaracuy pisó 05 oficina 02. Caracas Venezuela');
  $coolButtonLeft.on('click', function() {
    setCenter(geocoder1, 'calle 73#9-42 oficina 605, bogota');
  })

  $coolButtonMiddle.on('click', function() {
    setCenter(geocoder1, '2204 NW 82nd Avenue, Doral FL 33122, miami, florida');
  })

  $coolButtonRight.on('click', function() {
    setCenter(geocoder1, 'Av. Ppal de macaracuy multicentro macaracuy piso 05 oficina 02. Caracas Venezuela');
  })
}

function setCenter(geocoder, address) {
  geocoder.geocode({
    'address': address
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
      // return null;
    }
  });
}
