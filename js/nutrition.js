document.addEventListener('DOMContentLoaded', function() {
    const data = [{
        values: [30, 20, 50],
        labels: ['Белки', 'Жиры', 'Углеводы'],
        type: 'pie',
        hole: 0.4,
        marker: {
            colors: ['#4CAF50', '#FFC107', '#2196F3']
        },
        textinfo: 'label+percent',
        textposition: 'inside',
        textfont: {
            color: '#fff',
            size: 16
        }
    }];

    const layout = {
        ...plotlyDefaultLayout,
        showlegend: false,
        height: 500,
        margin: { t: 0, r: 0, b: 0, l: 0 }
    };

    Plotly.newPlot('nutrition-chart', data, layout, plotlyDefaultConfig);
}); 