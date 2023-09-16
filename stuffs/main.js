if ("geolocation" in navigator) {
    var map = L.map('map').setView([51.505, -0.09], 30);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const updatePosition = (lat, lng) => {
        map.setView([lat, lng], 30)
    };

    const watchID = navigator.geolocation.watchPosition((position) => {
        updatePosition(position.coords.latitude, position.coords.longitude);
    });

} else {
    document.innerHTML = '<h1>Not supported on your device. :(</h1>';
}
