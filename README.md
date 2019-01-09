# iSafety

## Contents
* Description
* Technologies
* Challenges and Solutions
* Stretch Goals
* Authors


## Description
iSafety is a web application developed as part of a front-end project. The application displays Fulton County crime data on a Google Maps map, takes an address from the user, and displays the data in an interactive chart.

### Features
* Links in the header of the website are clickable and will take the user to the top of the main page
* Banner pictures and header subtext scroll on a timer and will scroll manually once left and right arrows are clicked.
* Users can enter any address on the globe and the Google Maps API will zoom in to that address.
* Addresses entered within Fulton County will show crime data marked on the map accordingly.
* Markers showing a "P" are property related crimes. These are auto theft, burglary, and theft.  Markers showing a "V" are violent crimes. These are aggravated assault, rape, and robbery. The colors of the markers then correspond with the specific crime type shown in the legend.
* The doughnut chart shows crime data broken down by crime type between the six different categories of burglary, auto theft, rape, robbery, aggravated assault, and theft.
* Clicking on the different crimes in the legend will eliminate them from the chart.


## Technologies
* HTML, CSS, JavaScript
* Google Maps API
* Fulton County Crime Data API
* Bootstrap
* Chart.js
* jQuery

## Challenges and Solutions
We ran in to a few challenges when dealing with the asyncronous nature of JavaScript, specifically as it relates to Javascript trying to use the values returned from the AJAX request before the AJAX values were actually returned.   We were able mitigate some of our challenges by utilizing promises, and the async and await features.

```javascript
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
    })
}
```
We also came across several challenges when styling the web page. The main picture on the page is being displayed with a bootsrap carousel and centering the text on top of the image was accomplished by using the translateX poperty in CSS. Adjusting the picture size and layout with different page breaks also proved challenging. We utilized the background size and position to cover and center the image respectively.
```css
.carousel-caption{
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
}
.carousel-item{
    min-height: 500px;
    background-size: cover;
    background-position: center;
}
```
Finally, our biggest challenge in terms of total time spent working to resolve, was in learning to use GitHub as a team. 


## Stretch Goals
Further plans for development include:
* A "safety score" which calculates how safe you are in a given area based on crimes commited relative to your location
* Geolocation tracking which automatically pulls the user's location when the application is initialized
* Enhanced search features which narrow down search results to a given radius around the address entered
* Enhanced chart features which narrow down data to applicable crimes within a given radius of the search area
* Enhanced data analytics features which allow the user to view aditional crime variables such as trending over time and time of day of crimes commited
* About and contact information pages
* User login features which would enable the user to save previous locations, report crimes, and compare multiple locations against each other

## Authors
* Christopher Soltis
* JR Priestman
* Noelle Hashim
* Zac Crosby
