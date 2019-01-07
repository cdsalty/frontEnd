$(document).ready( function () {
    console.log("ready")
    $('body').append(`<script src="https://maps.googleapis.com/maps/api/js?key=${mapsKey}&callback=initMap"
    async></script>`)
    console.log("append")

    

    const crimeURL = 'https://performance.fultoncountyga.gov/resource/jgdb-bp9a.json';
    const table = $('#crime_table').DataTable( {
        "paging" : true, 
    })

    let rapeCount = 0;
    let burglaryCount = 0;
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
            if (crime == "burglary"){
                console.log("Anything");
                burglaryCount++;
            }
            // console.log(burglaryCount);
            // table.row.add([crime, incident[0], address])
        })
        // console.log(crimeData.stats.crime_type);
        // table.draw()
        drawChart(burglaryCount);
    }) //end getJSON
    
    
    // console.log(burglaryCount);
    
} );// end document.ready
