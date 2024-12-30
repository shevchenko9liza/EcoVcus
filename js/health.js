document.addEventListener('DOMContentLoaded', function() {
    // Используем общие настройки Plotly
    const data = [{
        x: ['Янв', 'Фев', 'Мар', 'Апр', 'Май'],
        y: [65, 72, 68, 75, 70],
        type: 'scatter',
        mode: 'lines+markers',
        line: {
            color: '#4CAF50',
            width: 3
        },
        marker: {
            color: '#fff',
            size: 8,
            line: {
                color: '#4CAF50',
                width: 2
            }
        }
    }];

    Plotly.newPlot('analysis-chart', data, plotlyDefaultLayout, plotlyDefaultConfig);
}); 