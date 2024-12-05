document.addEventListener("DOMContentLoaded", () => {
    
    const audio = document.querySelector('audio');
    const playPauseBtn = document.querySelector('.audio-controls .btn:nth-child(2)');
    const rewindBtn = document.querySelector('.audio-controls .btn:nth-child(1)');
    const forwardBtn = document.querySelector('.audio-controls .btn:nth-child(3)');

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '⏸️'; 
        } else {
            audio.pause();
            playPauseBtn.textContent = '⏯️'; 
        }
    });

    rewindBtn.addEventListener('click', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 10); 
    });

    forwardBtn.addEventListener('click', () => {
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); 
    });
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});