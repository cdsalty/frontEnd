function drawChart(burglaryCount,autoTheftCount,rapeCount,robberyCount,aggravatedCount,theftCount){
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Burglary","Auto Theft", "Rape", "Robbery","Aggravated Assault", "Theft"],
            datasets: [{
                label: '',
                data: [burglaryCount,autoTheftCount,rapeCount,robberyCount,aggravatedCount,theftCount],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(255, 0, 0, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(0, 76, 153, 0.9)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(0, 76, 153, 1)'
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