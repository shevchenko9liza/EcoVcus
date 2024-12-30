document.addEventListener('DOMContentLoaded', function() {
    // Проверяем загрузку всех изображений
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            console.error('Ошибка загрузки изображения:', img.src);
        };
    });
}); 