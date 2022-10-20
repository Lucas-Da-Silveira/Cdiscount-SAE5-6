const pieCanvas = document.getElementById("pieCanvas");

const pieChart = new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: ["Investissements", "Impôts", "Loyers", "Distribution"],
        datasets: [{
            data: [94.3, 3.6, 34.7, 171],
            backgroundColor: ["rgb(255, 96, 96)", "rgb(70, 113, 255)", "rgb(246, 255, 77)", "rgb(20, 204, 0)"],
            hoverOffset: 10
        }]
    },
    options:{
        plugins: {
            title: {
                display: true,
                text: "Dépenses de Cdiscount en 2021",
                font: {
                    size: 22
                },
                padding: 0
            },
            subtitle: {
                display: true,
                text: "(en millions d'€)",
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
        layout: {
            padding: {
                bottom: 20
            }
        }
    }
});