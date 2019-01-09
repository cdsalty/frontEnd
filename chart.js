function drawChart(burglaryCount,autoTheftCount,rapeCount,robberyCount,aggravatedCount,theftCount){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Burglary","Auto Theft", "Rape", "Robbery","Aggravated Assault", "Property Theft"],
            datasets: [{
                label: '',
                data: [burglaryCount,autoTheftCount,rapeCount,robberyCount,aggravatedCount,theftCount],
                backgroundColor: [
                    'rgba(3, 200, 2, 0.9)',
                    'rgba(240, 228, 78, 0.9)',
                    'rgba(216, 88, 100, 0.9)',
                    'rgba(204, 149, 247, 0.9)',
                    'rgba(255, 127, 0, 0.9)',
                    'rgba(108, 146, 253, 0.9)'
                ],
                borderColor: [
                    'rgba(3, 200, 2, 1)',
                    'rgba(240, 228, 78, 1)',
                    'rgba(216, 88, 100, 1)',
                    'rgba(204, 149, 247, 1)',
                    'rgba(255, 127, 0, 1)',
                    'rgba(108, 146, 253, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            legend: {
                position: "right"
        //         yAxes: [{
        //             ticks: {
        //                 beginAtZero:true
        //             }
        //         }]
            }
        }
    });
}