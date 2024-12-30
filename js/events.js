document.addEventListener('DOMContentLoaded', function() {
    const eventCards = document.querySelectorAll('.event-card');
    const detailsCard = document.querySelector('.details-card');

    // Пример данных мероприятий
    const eventsData = [
        {
            title: 'Мастер-класс по здоровому питанию',
            datetime: '15 мая 2024, 15:00',
            address: 'ул. Примерная, д. 123',
            description: 'Интерактивный мастер-класс по приготовлению полезных блюд с дегустацией и обсуждением принципов здорового питания.'
        },
        // Добавьте данные для других мероприятий
    ];

    eventCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Заполняем детали мероприятия
            const data = eventsData[0]; // Для примера используем первое мероприятие
            document.querySelector('.details-card h2').textContent = data.title;
            document.querySelector('#event-datetime').textContent = data.datetime;
            document.querySelector('#event-address').textContent = data.address;
            document.querySelector('#event-description').textContent = data.description;

            // Плавно прокручиваем к деталям
            detailsCard.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Обработка кнопки фильтра
    const filterButton = document.querySelector('.filter-button');
    filterButton.addEventListener('click', () => {
        // Здесь будет логика фильтрации
        console.log('Открыть фильтр');
    });
}); 