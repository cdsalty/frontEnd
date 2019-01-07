
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map_holder'), {
        center: {lat: 33.7490, lng: -84.3880},
        zoom: 15
    });

}

// https://developers.google.com/maps/documentation/javascript/markers

function drawMarker(crimeLat, crimeLon, crime) {
    let icon = {
        url: `./picsForProject/${crime}.png`, // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    let marker = new google.maps.Marker({
        position: {lat: crimeLat, lng: crimeLon},
        map: map,
        icon: icon
        // label: crime
    })
}





function getAddress(crimeLocation, latLng) {
    let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${crimeLocation}&key=${geocodeKey}`
    $.getJSON(geocodeURL, (results)=>{
        // console.log(results)
        // console.log(results.results[0].geometry.location)
        let latLng = results.results[0].geometry.location
        return latLng
    })
  }