// Dit is de javascript file voor het MijnPunten subonderdeel in de SED.

(function () {
    "use strict";
    
    // Activate tooltipster
    $(document).ready(function() {
        $('.tooltip').tooltipster();
    });
    
    //#region Variables
    const db = firebase.firestore();
    let tabcontent, successcontent, tablecontent, stackedBarChartMI, stackedBarChartNL, stackedBarChartAWM, stackedBarChartAD;

    let namesMI = [];
    let gradesMI = [];
    let pctMI = [];

    let namesNL = [];
    let gradesNL = [];
    let pctNL = [];

    let namesAWM = [];
    let gradesAWM = [];
    let pctAWM = [];

    let namesAD = [];
    let gradesAD = [];
    let pctAD = [];
    
    let tabContentAD = document.getElementById("AD-tabcontent");
    let tabContentAWM = document.getElementById("AWM-tabcontent");
    let tabContentNL = document.getElementById("NL-tabcontent");
    let tabContentMI = document.getElementById("MI-tabcontent");

    let graphContentAD = document.getElementById("AD-graph");
    let graphContentAWM = document.getElementById("AWM-graph");
    let graphContentNL = document.getElementById("NL-graph");
    let graphContentMI = document.getElementById("MI-graph");

    let prognosisTableAD = document.getElementById("AD-prognosis-table");
    let prognosisTableAWM = document.getElementById("AWM-prognosis-table");
    let prognosisTableNL = document.getElementById("NL-prognosis-table");
    let prognosisTableMI = document.getElementById("MI-prognosis-table");
    
    let prognosisGraphAD = document.getElementById("AD-prognosis-chart");
    let prognosisGraphAWM = document.getElementById("AWM-prognosis-chart");
    let prognosisGraphNL = document.getElementById("NL-prognosis-chart");
    let prognosisGraphMI = document.getElementById("MI-prognosis-chart");

    let successContentAD = document.getElementById("AD-successContent");
    let successContentAWM = document.getElementById("AWM-successContent");
    let successContentNL = document.getElementById("NL-successContent");
    let successContentMI = document.getElementById("MI-successContent");
    
    //#endregion

    //#region Functions
    // Opens tabcontent
    function openTab(tab, success, table){
        tabcontent = document.getElementsByClassName("tabcontent");
        successcontent = document.getElementsByClassName("successcontent");
        tablecontent = document.getElementsByClassName("tablecontent");

        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        for (var i = 0; i < successcontent.length; i++) {
            successcontent[i].style.display = "none";
        }

        for (var i = 0; i < tablecontent.length; i++) {
            tablecontent[i].style.display = "none";
        }
        
        tab.style.display = "block";
        success.style.display = "flex";
        table.style.display = "table";
    }

    function openGraph(graph, prognosisGraph) {
        let graphContent = document.getElementsByClassName("graphcontent");
        for (var i = 0; i < graphContent.length; i++) {
            graphContent[i].style.display = "none";
        }
        graph.style.display = "block";

        let prognosisGraphContent = document.getElementsByClassName("prognosisChartContent");
        for (var i = 0; i < prognosisGraphContent.length; i++) {
            prognosisGraphContent[i].style.display = "none";
        }
        prognosisGraph.style.display = "block";
    }

    function createChartMI() {
        var ctx = document.getElementById('myChartMI').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Gemiddelde klasgroep',
                    data: [14, 12],
                    type: 'line',
                    backgroundColor: [
                        '#DBF2F2',
                    ],
                    borderWidth: 1,
                    borderColor: [
                        '#4BC0C0',
                        '#4BC0C0',
                        '#4BC0C0',
                    ]
                }, {
                    label: 'Mijn punt',
                    data: [9, 15],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Design Thinking', 'Case Study', 'Hackathon']
            },
            options: {
                title: {
                    display: true,
                    text: 'Marketing & Innovation'
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

        let ctxPrognosis = document.getElementById('myPrognosisChartMI').getContext('2d');
        stackedBarChartMI = new Chart(ctxPrognosis, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Verwachte punt',
                    data: [10, 13, 0],
                    backgroundColor: [
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50']
                    },
                    {
                    label: 'Eigenlijke punt',
                    data: [9, 15, 0],
                    backgroundColor: [
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)'
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50']
                }],
                labels: ['Design Thinking', 'Case Study', 'Hackathon']
            },
            options: {
                title: {
                    display: true,
                    text: 'Marketing & Innovation'
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    }

    function createChartNL() {
        var ctx = document.getElementById('myChartNL').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Gemiddelde klasgroep',
                    data: [13, 15],
                    type: 'line',
                    backgroundColor: [
                        '#DBF2F2',
                    ],
                    borderWidth: 1,
                    borderColor: [
                        '#4BC0C0',
                        '#4BC0C0',
                        '#4BC0C0',
                    ]
                }, {
                    label: 'Mijn punt',
                    data: [14, 16],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Gantt chart', 'Werken als team', 'Belbin verslag']
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

        let ctxPrognosis = document.getElementById('myPrognosisChartNL').getContext('2d');
        stackedBarChartNL = new Chart(ctxPrognosis, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Verwachte punt',
                    data: [12, 13, 0],
                    backgroundColor: [
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50']
                    },
                    {
                    label: 'Eigenlijke punt',
                    data: [14, 16, 0],
                    backgroundColor: [
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)'
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50']
                }],
                labels: ['Gantt chart', 'Werken als team', 'Belbin verslag']
            },
            options: {
                title: {
                    display: true,
                    text: 'Nederlands'
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    }

    function createChartAWM() {
        var ctx = document.getElementById('myChartAWM').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Gemiddelde klasgroep',
                    data: [15, 14],
                    type: 'line',
                    backgroundColor: [
                        '#DBF2F2',
                    ],
                    borderWidth: 1,
                    borderColor: [
                        '#4BC0C0',
                        '#4BC0C0',
                        '#4BC0C0',
                    ]
                }, {
                    label: 'Mijn punt',
                    data: [16, 13],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Mobile app', 'Documentatie', 'Presentatie']
            },
            options: {
                title: {
                    display: true,
                    text: 'Advanced Web & Mobile'
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

        let ctxPrognosis = document.getElementById('myPrognosisChartAWM').getContext('2d');
        stackedBarChartAWM = new Chart(ctxPrognosis, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Verwachte punt',
                    data: [17, 12, 0],
                    backgroundColor: [
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50']
                    },
                    {
                    label: 'Eigenlijke punt',
                    data: [16, 13, 0],
                    backgroundColor: [
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)'
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50']
                }],
                labels: ['Mobile app', 'Documentatie', 'Presentatie']
            },
            options: {
                title: {
                    display: true,
                    text: 'Advanced Web & Mobile'
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    }

    function createChartAD() {
        var ctx = document.getElementById('myChartAD').getContext('2d');
        var mixedChart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Gemiddelde klasgroep',
                    data: [12, 11],
                    type: 'line',
                    backgroundColor: [
                        '#DBF2F2',
                    ],
                    borderWidth: 1,
                    borderColor: [
                        '#4BC0C0',
                        '#4BC0C0',
                        '#4BC0C0',
                        '#4BC0C0'
                    ]
                }, {
                    label: 'Mijn punt',
                    data: [13, 14],
                    backgroundColor: [
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6',
                        '#FFE0E6'
                    ],
                    borderWidth: 1,
                    borderColor: ['#FF6384', '#FF6384', '#FF6384', '#FF6384']
                }],
                labels: ['Opdracht 1', 'Opdracht 2', 'Eindproject', 'Mondeling']
            },
            options: {
                title: {
                    display: true,
                    text: 'Application Development'
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

        let ctxPrognosis = document.getElementById('myPrognosisChartAD').getContext('2d');
        stackedBarChartAD = new Chart(ctxPrognosis, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Verwachte punt',
                    data: [10, 14, 0, 0],
                    backgroundColor: [
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)",
                        "rgba(32, 162, 219, 0.3)"
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50']
                    },
                    {
                    label: 'Eigenlijke punt',
                    data: [13, 14, 0, 0],
                    backgroundColor: [
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)',
                        'rgba(255, 224, 230, 1)'
                    ],
                    borderWidth: 1,
                    borderColor: ['#2C3E50', '#2C3E50', '#2C3E50', '#2C3E50']
                }],
                labels: ['Opdracht 1', 'Opdracht 2', 'Eindproject', 'Mondeling']
            },
            options: {
                title: {
                    display: true,
                    text: 'Application Development'
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 20,
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    }

    function changePrognosisMI() {
        let inp1 = Number(document.getElementById("MI-inpOpdracht1").value);
        let inp2 = Number(document.getElementById("MI-inpOpdracht2").value);
        let inp3 = Number(document.getElementById("MI-inpOpdracht3").value);
        inp1 = (inp1 >= 20) ? 20 : inp1;
        inp2 = (inp2 >= 20) ? 20 : inp2;
        inp3 = (inp3 >= 20) ? 20 : inp3;
        stackedBarChartMI.data.datasets[0].data[0] = inp1;
        stackedBarChartMI.data.datasets[0].data[1] = inp2;
        stackedBarChartMI.data.datasets[0].data[2] = inp3;
        stackedBarChartMI.update();
    }

    function changePrognosisNL() {
        let inp1 = Number(document.getElementById("NL-inpOpdracht1").value);
        let inp2 = Number(document.getElementById("NL-inpOpdracht2").value);
        let inp3 = Number(document.getElementById("NL-inpOpdracht3").value);
        inp1 = (inp1 >= 20) ? 20 : (inp1 < 0) ? 0 : inp1;
        inp2 = (inp2 >= 20) ? 20 : (inp2 < 0) ? 0 : inp2;
        inp3 = (inp3 >= 20) ? 20 : (inp3 < 0) ? 0 : inp3;
        stackedBarChartNL.data.datasets[0].data[0] = inp1;
        stackedBarChartNL.data.datasets[0].data[1] = inp2;
        stackedBarChartNL.data.datasets[0].data[2] = inp3;
        stackedBarChartNL.update();
    }

    function changePrognosisAWM() {
        let inp1 = Number(document.getElementById("AWM-inpOpdracht1").value);
        let inp2 = Number(document.getElementById("AWM-inpOpdracht2").value);
        let inp3 = Number(document.getElementById("AWM-inpOpdracht3").value);
        inp1 = (inp1 >= 20) ? 20 : (inp1 < 0) ? 0 : inp1;
        inp2 = (inp2 >= 20) ? 20 : (inp2 < 0) ? 0 : inp2;
        inp3 = (inp3 >= 20) ? 20 : (inp3 < 0) ? 0 : inp3;
        stackedBarChartAWM.data.datasets[0].data[0] = inp1;
        stackedBarChartAWM.data.datasets[0].data[1] = inp2;
        stackedBarChartAWM.data.datasets[0].data[2] = inp3;
        stackedBarChartAWM.update();
    }

    function changePrognosisAD() {
        let inp1 = Number(document.getElementById("AD-inpOpdracht1").value);
        let inp2 = Number(document.getElementById("AD-inpOpdracht2").value);
        let inp3 = Number(document.getElementById("AD-inpOpdracht3").value);
        let inp4 = Number(document.getElementById("AD-inpOpdracht4").value);
        inp1 = (inp1 >= 20) ? 20 : (inp1 < 0) ? 0 : inp1;
        inp2 = (inp2 >= 20) ? 20 : (inp2 < 0) ? 0 : inp2;
        inp3 = (inp3 >= 20) ? 20 : (inp3 < 0) ? 0 : inp3;
        inp4 = (inp4 >= 20) ? 20 : (inp4 < 0) ? 0 : inp4;
        stackedBarChartAD.data.datasets[0].data[0] = inp1;
        stackedBarChartAD.data.datasets[0].data[1] = inp2;
        stackedBarChartAD.data.datasets[0].data[2] = inp3;
        stackedBarChartAD.data.datasets[0].data[3] = inp4;
        stackedBarChartAD.update();
    }

    function getData() {
        db.collection('MI')
        .get()
        .then((snapshot) => {
            let list;
            snapshot.docs.forEach(doc => {
                list = doc.data();
                (list.name != null) ? namesMI.push(list.name) : null;
                (list.grade != null) ? gradesMI.push(list.grade) : null;
                (list.percentage != null) ? pctMI.push(list.percentage) : null;
            });
            document.getElementById("tabNameMI1").innerHTML = document.getElementById("prognosisNameMI1").innerHTML = namesMI[0];
            document.getElementById("tabNameMI2").innerHTML = document.getElementById("prognosisNameMI2").innerHTML = namesMI[1];
            document.getElementById("tabNameMI3").innerHTML = document.getElementById("prognosisNameMI3").innerHTML = namesMI[2];

            document.getElementById("tabGradeMI1").innerHTML = document.getElementById("prognosisGradeMI1").innerHTML = gradesMI[0];
            document.getElementById("tabGradeMI2").innerHTML = document.getElementById("prognosisGradeMI2").innerHTML = gradesMI[1];
            // document.getElementById("tabGradeMI3").innerHTML = document.getElementById("prognosisGradeMI3").innerHTML = gradesMI[2];
            
            document.getElementById("eersteZitPctMI").innerHTML = pctMI[0];
            document.getElementById("tweedeZitPctMI").innerHTML = pctMI[1];
        });

        db.collection('NL')
        .get()
        .then((snapshot) => {
            let list;
            snapshot.docs.forEach(doc => {
                list = doc.data();
                (list.name != null) ? namesNL.push(list.name) : null;
                (list.grade != null) ? gradesNL.push(list.grade) : null;
                (list.percentage != null) ? pctNL.push(list.percentage) : null;
            });
            document.getElementById("tabNameNL1").innerHTML = document.getElementById("prognosisNameNL1").innerHTML = namesNL[0];
            document.getElementById("tabNameNL2").innerHTML = document.getElementById("prognosisNameNL2").innerHTML = namesNL[1];
            document.getElementById("tabNameNL3").innerHTML = document.getElementById("prognosisNameNL3").innerHTML = namesNL[2];

            document.getElementById("tabGradeNL1").innerHTML = document.getElementById("prognosisGradeNL1").innerHTML = gradesNL[0];
            document.getElementById("tabGradeNL2").innerHTML = document.getElementById("prognosisGradeNL2").innerHTML = gradesNL[1];
            // document.getElementById("tabGradeNL3").innerHTML = document.getElementById("prognosisGradeNL3").innerHTML = gradesNL[2];
            
            document.getElementById("eersteZitPctNL").innerHTML = pctNL[0];
            document.getElementById("tweedeZitPctNL").innerHTML = pctNL[1];
        });

        db.collection('AWM')
        .get()
        .then((snapshot) => {
            let list;
            snapshot.docs.forEach(doc => {
                list = doc.data();
                (list.name != null) ? namesAWM.push(list.name) : null;
                (list.grade != null) ? gradesAWM.push(list.grade) : null;
                (list.percentage != null) ? pctAWM.push(list.percentage) : null;
            });
            document.getElementById("tabNameAWM1").innerHTML = document.getElementById("prognosisNameAWM1").innerHTML = namesAWM[0];
            document.getElementById("tabNameAWM2").innerHTML = document.getElementById("prognosisNameAWM2").innerHTML = namesAWM[1];
            document.getElementById("tabNameAWM3").innerHTML = document.getElementById("prognosisNameAWM3").innerHTML = namesAWM[2];

            document.getElementById("tabGradeAWM1").innerHTML = document.getElementById("prognosisGradeAWM1").innerHTML = gradesAWM[0];
            document.getElementById("tabGradeAWM2").innerHTML = document.getElementById("prognosisGradeAWM2").innerHTML = gradesAWM[1];
            // document.getElementById("tabGradeAWM3").innerHTML = document.getElementById("prognosisGradeAWM3").innerHTML = gradesAWM[2];
            
            document.getElementById("eersteZitPctAWM").innerHTML = pctAWM[0];
            document.getElementById("tweedeZitPctAWM").innerHTML = pctAWM[1];
        });

        db.collection('AD')
        .get()
        .then((snapshot) => {
            let list;
            snapshot.docs.forEach(doc => {
                list = doc.data();
                (list.name != null) ? namesAD.push(list.name) : null;
                (list.grade != null) ? gradesAD.push(list.grade) : null;
                (list.percentage != null) ? pctAD.push(list.percentage) : null;
            });
            document.getElementById("tabNameAD1").innerHTML = document.getElementById("prognosisNameAD1").innerHTML = namesAD[0];
            document.getElementById("tabNameAD2").innerHTML = document.getElementById("prognosisNameAD2").innerHTML = namesAD[1];
            document.getElementById("tabNameAD3").innerHTML = document.getElementById("prognosisNameAD3").innerHTML = namesAD[2];
            document.getElementById("tabNameAD4").innerHTML = document.getElementById("prognosisNameAD4").innerHTML = namesAD[3];

            document.getElementById("tabGradeAD1").innerHTML = document.getElementById("prognosisGradeAD1").innerHTML = gradesAD[0];
            document.getElementById("tabGradeAD2").innerHTML = document.getElementById("prognosisGradeAD2").innerHTML = gradesAD[1];
            // document.getElementById("tabGradeAD3").innerHTML = document.getElementById("prognosisGradeAD3").innerHTML = gradesAD[2];
            // document.getElementById("tabGradeAD4").innerHTML = document.getElementById("prognosisGradeAD4").innerHTML = gradesAD[3];
            
            document.getElementById("eersteZitPctAD").innerHTML = pctAD[0];
            document.getElementById("tweedeZitPctAD").innerHTML = pctAD[1];
        });
    }

    window.onload = function () {
        getData();
        openTab(tabContentMI, successContentMI, prognosisTableMI);
        openGraph(graphContentMI, prognosisGraphMI);
        createChartMI();
    };
    //#endregion

    //#region Eventlisteners
    // Active/inactive tabs
    document.addEventListener("DOMContentLoaded", function() {
        var tabs = document.querySelectorAll('.tabbed li');

        for (var i = 0, len = tabs.length; i < len; i++) {
            tabs[i].addEventListener("click", function() {
                if (this.classList.contains('active'))
                    return;

                var parent = this.parentNode,
                    innerTabs = parent.querySelectorAll('li');

                for (var index = 0, iLen = innerTabs.length; index < iLen; index++) {
                    innerTabs[index].classList.remove('active');
                }

                this.classList.add('active');
            });
        }
    });

    document.getElementById("AD").addEventListener("click", function () {
        openTab(tabContentAD, successContentAD, prognosisTableAD);
        openGraph(graphContentAD, prognosisGraphAD);
        createChartAD();
    });

    document.getElementById("AWM").addEventListener("click", function () {
        openTab(tabContentAWM, successContentAWM, prognosisTableAWM);
        openGraph(graphContentAWM, prognosisGraphAWM);
        createChartAWM();
    });

    document.getElementById("NL").addEventListener("click", function () {
        openTab(tabContentNL, successContentNL, prognosisTableNL);
        openGraph(graphContentNL, prognosisGraphNL);
        createChartNL();
    });

    document.getElementById("MI").addEventListener("click", function () {
        openTab(tabContentMI, successContentMI, prognosisTableMI);
        openGraph(graphContentMI, prognosisGraphMI);
        createChartMI();
    });

    // Table input event listeners
    document.getElementById("MI-inpOpdracht1").addEventListener("input", function () {
        changePrognosisMI();
    });

    document.getElementById("MI-inpOpdracht2").addEventListener("input", function () {
        changePrognosisMI();
    });

    document.getElementById("MI-inpOpdracht3").addEventListener("input", function () {
        changePrognosisMI();
    });

    document.getElementById("NL-inpOpdracht1").addEventListener("input", function () {
        changePrognosisNL();
    });

    document.getElementById("NL-inpOpdracht2").addEventListener("input", function () {
        changePrognosisNL();
    });

    document.getElementById("NL-inpOpdracht3").addEventListener("input", function () {
        changePrognosisNL();
    });

    document.getElementById("AWM-inpOpdracht1").addEventListener("input", function () {
        changePrognosisAWM();
    });

    document.getElementById("AWM-inpOpdracht2").addEventListener("input", function () {
        changePrognosisAWM();
    });

    document.getElementById("AWM-inpOpdracht3").addEventListener("input", function () {
        changePrognosisAWM();
    });

    document.getElementById("AD-inpOpdracht1").addEventListener("input", function () {
        changePrognosisAD();
    });

    document.getElementById("AD-inpOpdracht2").addEventListener("input", function () {
        changePrognosisAD();
    });

    document.getElementById("AD-inpOpdracht3").addEventListener("input", function () {
        changePrognosisAD();
    });

    document.getElementById("AD-inpOpdracht4").addEventListener("input", function () {
        changePrognosisAD();
    });
    //#endregion
})();