
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map_holder'), {
        center: {lat: 33.770449999999997, lng: -84.4602},
        zoom: 18
    });
}