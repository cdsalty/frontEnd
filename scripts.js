$(document).ready( function () {
    console.log("ready")
    const crimeURL = 'https://performance.fultoncountyga.gov/resource/jgdb-bp9a.json';
    const table = $('#crime_table').DataTable( {
        "paging" : true, 
    })
    $.getJSON(crimeURL, (crimeData)=>{
        // console.log("getJSON")
        crimeData.forEach((stats)=>{
            // console.log(this)
            let incident = stats.incident_date_and_time.split("T")
            let crime = stats.crime_class
            let address = stats.location
            // console.log(stats.crime_class)
            // console.log(incident[0])
            // console.log(stats.location)
            table.row.add([crime, incident[0], address])
            // console.log("add row")
        })
        table.draw()
    }) //end getJSON
} );// end document.ready
