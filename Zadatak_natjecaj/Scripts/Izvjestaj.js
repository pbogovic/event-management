
let pieGrafLabels = [];

let pieGrafData = [];     

let pieGrafColors = ["0F434F", "447884"];


let chartGrafLabels = [];

let chartGrafData = [];

let chartGrafColors = "0F434F";

let ctx = null;
let chart = null;

var ctx2 = null; 
var chart2 = null;


function randomColor() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return hue;
}




$(document).ready(function () {





    $.getJSON("api/izvjestaj/zapByOdjel", function (data) {

       

        $(data).each(function (index, elem) {

           // console.log(elem.brZap +"   " + elem.odjel_naziv);

            pieGrafData.push(elem.brZap);

            pieGrafLabels.push(elem.odjel_naziv)          

        })

        console.log(pieGrafLabels.toString() + "\n" + pieGrafData.toString() + "\n" + pieGrafColors.toString());

        ctx = document.getElementById('myChart').getContext('2d');

        chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'pie',

            // The data for our dataset
            data: {
                labels: pieGrafLabels,
                datasets: [{
                    label: "My Prvi dataset",
                    backgroundColor: ['rgb(15, 67, 79)', 'rgb(107, 148, 158)'],
                    borderColor: 'rgb(255, 99, 132)',
                    data: pieGrafData
                }]
            },

            // Configuration options go here
            options: {
                layout: {
                    padding: {
                        left: 15,
                        right: 15,
                        top: 15,
                        bottom: 15
                    }
                },

                title:{

                    text: "Zaposlenici po odjelima",
                    display: true,

                },



                responsive: true,

                maintainAspectRatio: false,

            }
        });  

    });

    $.getJSON("api/izvjestaj/zapByDoB", function (data) {

        $(data).each(function (index, elem) {           

            chartGrafData.push(elem.brZap);

            chartGrafLabels.push(elem.yearGroup);          

        })

        console.log(chartGrafLabels.toString() + "\n" + chartGrafData.toString() + "\n" + chartGrafColors.toString());

        ctx2 = document.getElementById('myChart2').getContext('2d');

        chart2 = new Chart(ctx2, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: chartGrafLabels,
                datasets: [{
                    label: "Godina",
                    backgroundColor: 'rgb(15, 67, 79)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: chartGrafData,
                }]
            },
            // Configuration options go here
            options: {
                layout: {
                    padding: {
                        left: 15,
                        right: 15,
                        top: 15,
                        bottom: 15
                    }

                },
                scales: {
                    yAxes: [{

                        ticks: {
                            beginAtZero: true
                        }

                    }]
                },

                title: {

                    text: "Prikaz zaposlenika po godini rođenja",
                    display: true
                },

                responsive: true,

                maintainAspectRatio: false,


            }
        });

    })



    


   


        

});


