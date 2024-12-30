document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    const modal = document.querySelector('.video-modal');
    const videoContainer = document.querySelector('.video-container');
    const closeModal = document.querySelector('.close-modal');

    // Пример данных видео (можно заменить на реальные)
    const videoData = [
        { id: 'video1', url: 'https://www.youtube.com/embed/VIDEO_ID_1' },
        { id: 'video2', url: 'https://www.youtube.com/embed/VIDEO_ID_2' },
        { id: 'video3', url: 'https://www.youtube.com/embed/VIDEO_ID_3' }
    ];

    videoCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = videoData[index].url;
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('frameborder', '0');
            
            videoContainer.innerHTML = '';
            videoContainer.appendChild(iframe);
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        videoContainer.innerHTML = '';
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal.click();
        }
    });
}); 