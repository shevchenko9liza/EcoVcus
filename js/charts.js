class Charts {
    static createNutritionChart(containerId) {
        const data = [{
            values: [30, 30, 40],
            labels: ['Белки', 'Жиры', 'Углеводы'],
            type: 'pie',
            marker: {
                colors: ['#36A2EB', '#FF6384', '#FFCE56']
            }
        }];

        const layout = {
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: { color: 'white' },
            showlegend: true,
            legend: { font: { color: 'white' } }
        };

        Plotly.newPlot(containerId, data, layout);
    }

    static createProgressCharts() {
        // Тренд
        const trendData = {
            x: [...Array(10)].map((_, i) => i),
            y: [...Array(10)].map(() => Math.random() * 100),
            type: 'scatter',
            line: { color: '#36A2EB' }
        };

        // Кольцевая диаграмма
        const progressData = [{
            values: [75, 25],
            labels: ['Пройдено', 'Осталось'],
            type: 'pie',
            hole: .4,
            marker: {
                colors: ['#36A2EB', '#eee']
            }
        }];

        // Настройки для всех графиков
        const commonLayout = {
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            font: { color: 'white' },
            showlegend: false
        };

        Plotly.newPlot('trendChart', [trendData], commonLayout);
        Plotly.newPlot('progressRing', progressData, commonLayout);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация графиков на соответствующих страницах
    if (document.getElementById('nutritionChart')) {
        Charts.createNutritionChart('nutritionChart');
    }
    if (document.getElementById('trendChart')) {
        Charts.createProgressCharts();
    }
});