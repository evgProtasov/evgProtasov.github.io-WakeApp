window.addEventListener('load', function () {
    setInterval(addPreloader, 2000)
    
});

function addPreloader() {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}