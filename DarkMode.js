// DarkMode Feature

const toggleBtn = document.querySelector('.input');
const head = document.getElementById('head');

function UpdateBody() {
    if (toggleBtn.checked) {
        document.body.style.backgroundColor = 'hsl(0, 0%, 2%)';
        head.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        head.style.color = 'hsl(0, 0%, 2%)';
    }
}

toggleBtn.addEventListener('input', UpdateBody);
