document.addEventListener('DOMContentLoaded', function() {
    // График тренда
    const trendData = {
        x: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        y: [30, 35, 33, 38, 40, 42],
        type: 'scatter',
        mode: 'lines+markers',
        line: {
            color: '#2196F3',
            width: 3
        },
        marker: {
            color: '#fff',
            size: 8,
            line: {
                color: '#2196F3',
                width: 2
            }
        }
    };

    const trendLayout = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: {
            family: 'AA Stetica Light',
            color: '#fff'
        },
        margin: { t: 30, r: 30, b: 40, l: 40 },
        showlegend: false,
        xaxis: {
            gridcolor: 'rgba(255,255,255,0.1)',
            zerolinecolor: 'rgba(255,255,255,0.1)'
        },
        yaxis: {
            gridcolor: 'rgba(255,255,255,0.1)',
            zerolinecolor: 'rgba(255,255,255,0.1)'
        }
    };

    // Кольцевая диаграмма
    const donutData = [{
        values: [65, 35],
        labels: ['Пройдено', 'Осталось'],
        type: 'pie',
        hole: 0.7,
        marker: {
            colors: ['#2196F3', 'rgba(255,255,255,0.1)']
        },
        textinfo: 'percent',
        textposition: 'inside',
        textfont: {
            color: '#fff',
            size: 16
        }
    }];

    const donutLayout = {
        ...trendLayout,
        annotations: [{
            text: '65%',
            showarrow: false,
            font: {
                size: 24,
                color: '#fff'
            }
        }]
    };

    // Барчарт
    const barData = [{
        x: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        y: [80, 65, 90, 75, 85, 60, 70],
        type: 'bar',
        marker: {
            color: '#2196F3'
        }
    }];

    const barLayout = {
        ...trendLayout
    };

    // Создаем графики
    Plotly.newPlot('trend-chart', [trendData], trendLayout, {displayModeBar: false});
    Plotly.newPlot('donut-chart', donutData, donutLayout, {displayModeBar: false});
    Plotly.newPlot('bar-chart', barData, barLayout, {displayModeBar: false});

    // 3D модель тела (заглушка)
    const bodyModelDiv = document.getElementById('body-model');
    bodyModelDiv.innerHTML = '<div class="model-placeholder">3D модель тела</div>';
}); 