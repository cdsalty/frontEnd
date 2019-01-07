$(document).ready( function () {
    console.log("ready")
    $('.body').append(`<script src="https://maps.googleapis.com/maps/api/js?key=${mapsKey}&callback=initMap"
    async defer></script>`)
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
            // console.log(stats.crime_class)
            // console.log(incident[0])
            // console.log(stats.location)
            // table.row.add([crime, incident[0], address])
            // console.log("add row")
            drawMarker(crimeLat, crimeLon, crime)
        })

        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Rape", "Assault", "Robbery", "Theft", "Burglary", "Arson"],
                datasets: [{
                    label: '# of Votes',
                    data: [1,2,3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        // console.log(crimeData.stats.crime_type);
        
        // table.draw()
    }) //end getJSON
    

    

    
} );// end document.ready
