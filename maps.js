// initialize the map variable as a global variable so that we can reference it later
// in the code when we need to draw markers and recenter the map

let crimeMap;
function initMap() {

    // init a new map centered on Atlanta
    // this function will be called when the google maps api is finished loading using a callback

    crimeMap = new google.maps.Map(document.getElementById('map_holder'), {
        center: {lat: 33.7490, lng: -84.3880},
        zoom: 15
    });

}

// link to the documentation on google maps markers for future reference
// https://developers.google.com/maps/documentation/javascript/markers

function drawMarker(latLng) {
    // draw a new marker at the coordinates provided

    let marker = new google.maps.Marker({
        position: latLng,
        map: crimeMap,

    })
}

async function centerMap(address) {
    //get address lat/lng object from google maps api and set it to a variable

    let center = await getGeocode(address)

    // take object just returned and recenter map at that location

    crimeMap.panTo(center);

}



async function getGeocode(crimeLocation) {

    // init some variables to be used later in the function

    let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${crimeLocation}&key=${geocodeKey}`
    let latLng
    await $.getJSON(geocodeURL, (results)=>{
        //get address lat/lng object from google maps api and return it

        latLng = results.results[0].geometry.location

    })// end getJSON
    return latLng
  }// end function

