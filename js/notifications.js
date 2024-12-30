class NotificationSystem {
    constructor() {
        this.notifications = [];
        this.unreadCount = 0;
        this.init();
    }

    init() {
        // Добавляем приветственное уведомление при первом входе
        if (!localStorage.getItem('welcomeShown')) {
            this.addNotification('Добро пожаловать в мир ЭкоВкус!');
            localStorage.setItem('welcomeShown', 'true');
        }
    }

    addNotification(message) {
        this.notifications.push({
            id: Date.now(),
            message: message,
            read: false,
            date: new Date()
        });
        this.unreadCount++;
        this.updateBell();
    }

    markAsRead(notificationId) {
        const notification = this.notifications.find(n => n.id === notificationId);
        if (notification && !notification.read) {
            notification.read = true;
            this.unreadCount--;
            this.updateBell();
        }
    }

    updateBell() {
        const bell = document.querySelector('.notification-bell');
        const counter = document.querySelector('.notification-counter');
        
        if (this.unreadCount > 0) {
            counter.style.display = 'block';
            counter.textContent = this.unreadCount;
        } else {
            counter.style.display = 'none';
        }
    }

    showNotifications() {
        const container = document.querySelector('.notifications-container');
        container.innerHTML = '';

        if (this.notifications.length === 0) {
            container.innerHTML = '<div class="no-notifications">Уведомлений пока нет</div>';
            return;
        }

        this.notifications.forEach(notification => {
            const notificationElement = document.createElement('div');
            notificationElement.className = `notification ${notification.read ? 'read' : 'unread'}`;
            notificationElement.innerHTML = `
                <div class="notification-message">${notification.message}</div>
                <div class="notification-date">${notification.date.toLocaleString()}</div>
            `;
            container.appendChild(notificationElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.notificationSystem = new NotificationSystem();
});