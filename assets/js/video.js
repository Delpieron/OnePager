var vid = document.getElementById('video');
var btn = document.getElementById('play-btn');

function playVideo() {
    btn.style.display = 'none';
    vid.play();

}

document.getElementById("video").addEventListener('click', () => {
    vid.pause();
    btn.style.display = 'block';
});

document.getElementById("video").addEventListener('ended', () => {
    btn.style.display = 'block';
});