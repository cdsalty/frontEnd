$(document).ready( function () {
    console.log("ready")
    $('body').append(`<script src="https://maps.googleapis.com/maps/api/js?key=${mapsKey}&callback=initMap"
    async></script>`)
    console.log("append")

    

    const crimeURL = 'https://performance.fultoncountyga.gov/resource/jgdb-bp9a.json';
    const table = $('#crime_table').DataTable( {
        "paging" : true, 
    })
    let aggravatedCount = 0;
    let assaultCount = 0;
    let autoTheftCount = 0;
    let burglaryCount = 0;
    let rapeCount = 0;
    let robberyCount = 0;
    let theftCount = 0;


    $.getJSON(crimeURL, (crimeData)=>{
        // console.log("getJSON")
        crimeData.forEach((stats)=>{
            // console.log(this)
            let incident = stats.incident_date_and_time.split("T");
            let crime = stats.crime_class.toLowerCase().replace(/\s+/g, '');
            let address = stats.location;
            let crimeLat = Number(stats.latitude);
            let crimeLon = Number(stats.longitude);
            let latLng = {}
            if (crimeLat != 0 && crimeLon != 0){

                drawMarker(crimeLat, crimeLon, crime)

            }
            if (crime == "aggravatedassault"){
                // console.log("Anything");
                aggravatedCount++;
            }
            if (crime == "assault"){
                // console.log("Anything");
                assaultCount++;
            }
            if (crime == "autotheft"){
                // console.log("Anything");
                autoTheftCount++;
            }
            if (crime == "burglary"){
                // console.log("Anything");
                burglaryCount++;
            }
            if (crime == "rape"){
                // console.log("Anything");
                rapeCount++;
            }
            if (crime == "robbery"){
                // console.log("Anything");
                robberyCount++;
            }
            if (crime == "theft"){
                // console.log("Anything");
                theftCount++;
            }
            // console.log(burglaryCount);
            // table.row.add([crime, incident[0], address])
        })
        // console.log(crimeData.stats.crime_type);
        // table.draw()
        drawChart(aggravatedCount,assaultCount,autoTheftCount,burglaryCount,rapeCount,robberyCount,theftCount);
    }) //end getJSON
    
    
    // console.log(burglaryCount);
    
} );// end document.ready
