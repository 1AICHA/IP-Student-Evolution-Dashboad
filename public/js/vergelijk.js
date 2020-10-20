(function () {
    "use strict";

    function createChart1() {
        var ctx = document.getElementById('myChart1').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Gantt chart',
                    data: [14, 16, 11, 13],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Mezelf', 'Jane Doe', 'Bert Bibber', 'John Doe']
            },
            options: {
                title: {
                    display: true,
                    text: 'Nederlands'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    function createChart2() {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Werken als team',
                    data: [12, 13, 16, 9],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Mezelf', 'Jane Doe', 'Bert Bibber', 'John Doe']
            },
            options: {
                title: {
                    display: true,
                    text: 'Nederlands'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    function createChart3() {
        var ctx = document.getElementById('myChart3').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Belbin verslag',
                    data: [19, 14, 16, 18],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Mezelf', 'Jane Doe', 'Bert Bibber', 'John Doe']
            },
            options: {
                title: {
                    display: true,
                    text: 'Nederlands'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    document.getElementById('vergelijkPunten').addEventListener("click", () => {
        if (document.getElementById('opdracht').value == "ganntchart") {
            createChart1();
            document.getElementById('myChart1').style.display = "block";
            document.getElementById('myChart2').style.display = "none";
            document.getElementById('myChart3').style.display = "none";
        }
        else if (document.getElementById('opdracht').value == "werkenalsteam") {
            createChart2();
            document.getElementById('myChart2').style.display = "block";
            document.getElementById('myChart1').style.display = "none";
            document.getElementById('myChart3').style.display = "none";
        }
        else if (document.getElementById('opdracht').value == "belbinverslag") {
            createChart3();
            document.getElementById('myChart3').style.display = "block";
            document.getElementById('myChart2').style.display = "none";
            document.getElementById('myChart1').style.display = "none";
        };
    })

    window.onload = function () {
        createChart1();
    };

})();