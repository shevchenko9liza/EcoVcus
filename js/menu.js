document.addEventListener('DOMContentLoaded', function() {
    // Меню
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    // Обработчик клика по кнопке меню
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Подменю
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item.querySelector('.submenu')) {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.submenu').classList.add('active');
            });
            item.addEventListener('mouseleave', () => {
                item.querySelector('.submenu').classList.remove('active');
            });
        }
    });

    // Предотвращение закрытия меню при клике на подменю
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Исправление путей для вложенных страниц
    if (window.location.pathname.includes('/pages/')) {
        document.querySelectorAll('.menu-item a').forEach(link => {
            if (link.getAttribute('href').startsWith('pages/')) {
                link.href = link.getAttribute('href').replace('pages/', '../pages/');
            }
        });
    }

    // Уведомления
    const notificationBell = document.querySelector('.notification-bell');
    const notificationDot = document.querySelector('.notification-dot');
    const notificationsPanel = document.querySelector('.notifications-panel');
    
    // Показываем зеленую точку при первом входе
    notificationDot.style.display = 'block';
    notificationDot.style.backgroundColor = '#006400'; // Зеленый цвет

    // Обработчик клика по колокольчику
    notificationBell.addEventListener('click', () => {
        notificationsPanel.classList.toggle('active');
        notificationDot.style.display = 'none'; // Скрываем точку после клика
    });

    // Закрытие панели уведомлений при клике вне её
    document.addEventListener('click', (e) => {
        if (!notificationsPanel.contains(e.target) && !notificationBell.contains(e.target)) {
            notificationsPanel.classList.remove('active');
        }
    });
});