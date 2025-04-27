const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    body.classList.remove('light-theme');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

// Toggle theme on click
toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.add('rotate-animation');
    setTimeout(() => {
        toggleBtn.classList.remove('rotate-animation');
    }, 500);

    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});
