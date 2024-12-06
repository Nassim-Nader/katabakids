
const playBtn = document.querySelector('.play-btn');
const rewindBtn = document.querySelector('.rewind-btn');
const forwardBtn = document.querySelector('.forward-btn');
const progressBar = document.querySelector('.progress-bar');


const audio = new Audio('../audio/sample.mp3');

audio.addEventListener('canplaythrough', () => {
    console.log("Audio file loaded successfully.");
});

audio.addEventListener('error', () => {
    console.error("Error loading audio file. Check the file path and ensure it exists.");
});


playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
            .then(() => {
                playBtn.textContent = '⏸️'; 
                console.log("Audio playing...");
            })
            .catch((err) => {
                console.error("Error playing audio:", err);
            });
    } else {
        audio.pause();
        playBtn.textContent = '▶️'; 
        console.log("Audio paused.");
    }
});


rewindBtn.addEventListener('click', () => {
    audio.currentTime -= 10; 
    console.log("Rewind 10 seconds:", audio.currentTime);
});


forwardBtn.addEventListener('click', () => {
    audio.currentTime += 10;
    console.log("Forward 10 seconds:", audio.currentTime);
});


audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    console.log("Progress bar updated:", progress);
});


progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
    console.log("Seeked to:", seekTime);
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        console.log("Navigation active link set:", this.textContent);
    });
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});