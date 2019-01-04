
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map_holder'), {
        center: {lat: 33.7490, lng: -84.3880},
        zoom: 12
    });
}