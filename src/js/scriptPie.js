const pieCanvas = document.getElementById("pieCanvas");

const pieChart = new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: ["Dépenses variées", "Développement", "Rémunération"],
        datasets: [{
            data: [500, 250, 150],
            backgroundColor: ["rgb(255, 96, 96)", "rgb(70, 113, 255)", "rgb(246, 255, 77)"],
            hoverOffset: 4
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
            }
        }
    }
});