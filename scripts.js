document.addEventListener('DOMContentLoaded', () => {
   
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        updateIcon(currentTheme);
    } else if (prefersDark) {
        document.body.classList.add('dark-mode');
        updateIcon('dark-mode');
    } else {
        document.body.classList.add('light-mode');
        updateIcon('light-mode');
    }

    toggleButton.addEventListener('click', () => {
        
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            updateIcon('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            updateIcon('dark-mode');
        }

       
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });

    const arrow = document.querySelector('.scroll-down-arrow');

  
    document.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            arrow.classList.add('hidden');
        } else {
            arrow.classList.remove('hidden'); 
        }
    });
});

function updateIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'dark-mode') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); 
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}