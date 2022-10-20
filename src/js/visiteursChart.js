const visiteursCanvas = document.getElementById("line22");

const labels2 = ["2018", "2019", "2020", "2021"];

const visiteursChart = new Chart(visiteursCanvas, {
    type: "line",
    data: {
        labels: labels2,
        datasets: [{
            label: "Nombre de visiteurs",
            data: [10, 20, 26, 25],
            backgroundColor: "rgb(227,54,5)",
            borderColor: "rgb(227,54,5)"
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 18
                    },
                    stepSize: 2
                },
                title: {
                    display: true,
                    text: "Valeur",
                    font: {
                        size: 14
                    },
                },
                suggestedMax: 30

            },
            x: {
                grid: {
                },
                ticks: {
                    font: {
                        size: 18
                    },
                },
                title: {
                    display: true,
                    text: "Année",
                    font: {
                        size: 14
                    },
                },
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Nombre de visiteurs uniques",
                font: {
                    size: 22
                },
                padding: 0
            },
            subtitle: {
                display: true,
                text: "(en millions)",
                font: {
                    size: 18
                },
                padding: 0
            },
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: externalTooltipHandler
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        }
    }
});