document.addEventListener('DOMContentLoaded', () => {
    // Инициализация меню
    const menuButton = document.querySelector('.menu-button');
    const mainMenu = document.querySelector('.main-menu');
    const notificationBell = document.querySelector('.notification-bell');
    const notificationsContainer = document.querySelector('.notifications-container');

    // Обработчик меню-бургер
    menuButton.addEventListener('click', () => {
        mainMenu.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Обработчик уведомлений
    notificationBell.addEventListener('click', () => {
        notificationsContainer.classList.toggle('active');
        window.notificationSystem.showNotifications();
    });

    // Закрытие меню и уведомлений при клике вне их области
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.main-menu') && !e.target.closest('.menu-button')) {
            mainMenu.classList.remove('active');
        }
        if (!e.target.closest('.notifications-container') && !e.target.closest('.notification-bell')) {
            notificationsContainer.classList.remove('active');
        }
    });

    // Обработка навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            loadContent(this.getAttribute('href').substring(1));
        });
    });
});

// Функция загрузки контента
function loadContent(page) {
    const mainContent = document.querySelector('.main-content');
    
    // Загрузка соответствующего контента
    switch(page) {
        case 'training':
            mainContent.innerHTML = createTrainingPage();
            break;
        case 'nutrition':
            mainContent.innerHTML = createNutritionPage();
            initNutritionCharts();
            break;
        case 'health':
            mainContent.innerHTML = createHealthPage();
            initHealthCharts();
            break;
        case 'progress':
            mainContent.innerHTML = createProgressPage();
            initProgressCharts();
            break;
        case 'tariffs':
            mainContent.innerHTML = createTariffsPage();
            break;
        case 'events':
            mainContent.innerHTML = createEventsPage();
            break;
        // Добавьте другие страницы по необходимости
    }
}

// Функции создания страниц
function createTrainingPage() {
    return `
        <section class="training-section">
            <h2>Мои тренировки</h2>
            <div class="training-options">
                <p>Выбранный формат</p>
                <p>Спортзал/Домашняя тренировка</p>
                <p>Уровень лайт/средний/мощный</p>
                <p>Время</p>
                <p>Цель калорий</p>
            </div>
            <div class="training-images">
                <img src="images/train1.png" alt="Тренировка 1">
                <img src="images/train2.png" alt="Тренировка 2">
            </div>
        </section>
    `;
}

function createNutritionPage() {
    return `
        <section class="nutrition-section">
            <h2>Питание</h2>
            <div id="nutrition-chart"></div>
        </section>
    `;
}

// Продолжение следует...
