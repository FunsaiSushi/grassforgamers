document.addEventListener('DOMContentLoaded', function () {
    const backgroundVideo = document.getElementById('video-background');
    const characterVideo = document.getElementById('shooter');
    const newCharacterVideo = document.getElementById('shooter-response');
    const toggleButton = document.getElementById('play-button');

    if (backgroundVideo && characterVideo && newCharacterVideo && toggleButton) {
        toggleButton.addEventListener('click', function () {
            characterVideo.style.display = 'none';
            newCharacterVideo.style.display = 'block';
            newCharacterVideo.play();
            setTimeout(function () {
                window.location.href = 'shop.html';
            }, 4200);
        });
        backgroundVideo.play();
        characterVideo.play();
    } else {
        console.error('Error: Video elements or button not found.');
    }
});
