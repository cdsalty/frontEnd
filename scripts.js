$(document).ready( function () {
    console.log("ready")
    $('.body').append(`<script src="https://maps.googleapis.com/maps/api/js?key=${mapsKey}&callback=initMap"
    async></script>`)
    console.log("append")

    

    const crimeURL = 'https://performance.fultoncountyga.gov/resource/jgdb-bp9a.json';
    const table = $('#crime_table').DataTable( {
        "paging" : true, 
    })
    $.getJSON(crimeURL, (crimeData)=>{
        // console.log("getJSON")
        crimeData.forEach((stats)=>{
            // console.log(this)
            let incident = stats.incident_date_and_time.split("T");
            let crime = stats.crime_class;
            let address = stats.location;
            let crimeLat = Number(stats.latitude);
            let crimeLon = Number(stats.longitude);
            if (crimeLat == 0 && crimeLon == 0){
                
                getAddress(address)
            }
            drawMarker(crimeLat, crimeLon, crime)
            // table.row.add([crime, incident[0], address])
        })
        // table.draw()
    }) //end getJSON
    
} );// end document.ready
