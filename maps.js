
let map;
function initMap() {
    crimeMap = new google.maps.Map(document.getElementById('map_holder'), {
        center: {lat: 33.7490, lng: -84.3880},
        zoom: 15
    });

}

// https://developers.google.com/maps/documentation/javascript/markers

function drawMarker(crimeLat, crimeLon, crime) {
    // let icon = {
    //     url: `./picsForProject/${crime}.png`, // url
    //     scaledSize: new google.maps.Size(30, 30), // scaled size
    //     origin: new google.maps.Point(0,0), // origin
    //     anchor: new google.maps.Point(0, 0) // anchor
    // };
    let marker = new google.maps.Marker({
        position: {lat: crimeLat, lng: crimeLon},
        map: crimeMap,
        // icon: icon
        // label: crime
    })
}

function centerMap(address) {
    let latLng = getGeocode(address)
    console.log(latLng)

}



function getGeocode(crimeLocation) {
    let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${crimeLocation}&key=${geocodeKey}`

    $.getJSON(geocodeURL, (results)=>{
        // console.log(results)
        // console.log(results.results[0].geometry.location)
        // results.results[0].geometry.location
        let latLng = []
        latLng.push(results.results[0].geometry.location.lat)
        latLng.push(results.results[0].geometry.location.lng)
        // console.log(latLng)
        requestFinished = true
        return latLng
        // resolve(latLng)
    })// end getJSON

  }// end function

//   let addressPromise = new Promise(function(resolve, reject){

//   })