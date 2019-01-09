function submitForm(event){

    // since we are using a form the first thing we must do is stop the default behavior

    event.preventDefault()
    
    // pull the value the user types into the search bar and save it to a variable

    let address = $('#searchBar').val();

    // pass that variable to the centerMap function to recenter the map at the address provided
    
    centerMap(address)
}

$(document).ready( function () {

    // initialize some global variables for use later on
    let requestFinished = false
    const crimeURL = 'https://performance.fultoncountyga.gov/resource/jgdb-bp9a.json';
    let aggravatedCount = 0;
    let assaultCount = 0;
    let autoTheftCount = 0;
    let burglaryCount = 0;
    let rapeCount = 0;
    let robberyCount = 0;
    let theftCount = 0;

    // send ajax request to pull crime data for Fulton County

    $.getJSON(crimeURL, (crimeData)=>{

        // loop through the array that is returned to pull data on specific crimes

        crimeData.forEach((stats)=>{

            // initialize some variables to pull crime specific data

            let incident = stats.incident_date_and_time.split("T");
            let crime = stats.crime_class.toLowerCase().replace(/\s+/g, '');
            let address = stats.location;
            let crimeLat = Number(stats.latitude);
            let crimeLon = Number(stats.longitude);
            let latLng = {lat: crimeLat, lng: crimeLon}

            // if we already have lat and lng DataCue, plot the points on the map

            if (crimeLat != 0 && crimeLon != 0){

                drawMarker(latLng)

            }

            // if the lat/lng data is missing from the JSON then we must use google maps
            // to get the geocoding data
            
            // since JS is an async language and we need it to wait for google maps
            // to return some DataCue, we need to use promises to tell JS to not execute
            // the code on line 67 until google is done

            if(crimeLat == 0 && crimeLon == 0){
                let getCoords = new Promise((resolve,reject)=>{
                    resolve(getGeocode(address))
                })

                getCoords.then((coordinateObject)=>{

                    drawMarker(coordinateObject)

                })
                

            }

            // logic to count how many of each crime is committed for the
            // data analytics graphs

            if (crime == "aggravatedassault"){
                aggravatedCount++;
            }
            if (crime == "assault"){
                assaultCount++;
            }
            if (crime == "autotheft"){
                autoTheftCount++;
            }
            if (crime == "burglary"){
                burglaryCount++;
            }
            if (crime == "rape"){
                rapeCount++;
            }
            if (crime == "robbery"){
                robberyCount++;
            }
            if (crime == "theft"){
                theftCount++;
            }

        })  // end forEach

        // call drawChart() to initialize the graph with the crime count data

        drawChart(burglaryCount,autoTheftCount,rapeCount,robberyCount,aggravatedCount,theftCount);
    
    }) // end getJSON
    
    
    
} );// end document.ready
