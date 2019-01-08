function submitForm(event){
    event.preventDefault()
    // console.log('sanity check')
    let address = $('#searchBar').val();
    // console.log(address)
    centerMap(address)
}

$(document).ready( function () {

    // initialize some global variables for use later on
    let requestFinished = false
    const crimeURL = 'https://performance.fultoncountyga.gov/resource/jgdb-bp9a.json';
    // const table = $('#crime_table').DataTable( {
    //     "paging" : true, 
    // })
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

            // if we already have lat and lng DataCue, plot the points on the map

            if (crimeLat != 0 && crimeLon != 0){

                drawMarker(crimeLat, crimeLon, crime)

            }

            // otherwise, get the geocoding data from an ajax request 
            // and use recursion to force the computer to wait
            // then change the lat lng data for this crime and plot it

            if(crimeLat == 0 && crimeLon == 0){
                
                let latLng = getGeocode(address)

                if(requestFinished){
                    crimeLat = latLng[0]
                    crimeLon = latLng[1]
                    drawMarker(crimeLat,crimeLon,crime)
                }else{
                    getGeocode(latLng)
                }

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

        drawChart(aggravatedCount,assaultCount,autoTheftCount,burglaryCount,rapeCount,robberyCount,theftCount);
    
    }) // end getJSON
    
    
    
} );// end document.ready
