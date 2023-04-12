function Map(latitude, longitude) {
    const map = document.getElementById('map');
    map.src = "https://maps.google.com/maps?q=" + latitude + "," + longitude + "&z=15&output=embed";
}