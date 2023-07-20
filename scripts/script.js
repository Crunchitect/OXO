
const map = L.map('map').setView([0, 0], 25);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker, circle; // Declare marker and circle variables

function onLocationFound(e) {
  var radius = e.accuracy / 2;
  
  // Create marker if it doesn't exist, otherwise update its position
  if (!marker) {
    marker = L.marker(e.latlng).addTo(map);
  } else {
    marker.setLatLng(e.latlng);
  }
  
  // Create circle if it doesn't exist, otherwise update its position and radius
  if (!circle) {
    circle = L.circle(e.latlng, radius).addTo(map);
  } else {
    circle.setLatLng(e.latlng).setRadius(radius);
  }
  
  marker.bindPopup("You are within " + radius + " meters from this point");
}

map.on('locationfound', onLocationFound);
map.locate({setView: true, watch: true, maxZoom: 20});
