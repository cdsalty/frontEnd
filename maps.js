
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map_holder'), {
        center: {lat: 33.7490, lng: -84.3880},
        zoom: 15
    });
}

// https://developers.google.com/maps/documentation/javascript/markers

function drawMarker(crimeLat, crimeLon, crime) {
    let marker = new google.maps.Marker({
        position: {lat: crimeLat, lng: crimeLon},
        map: map,
        title: crime
    })
}