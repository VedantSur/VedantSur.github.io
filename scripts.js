// Check and apply the user's system preferred theme (dark or light) on page load
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Check the system theme preference and apply it if not overridden
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply the theme on page load
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

    // Event listener for the theme toggle button
    toggleButton.addEventListener('click', () => {
        // Toggle between dark and light mode
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            updateIcon('light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            updateIcon('dark-mode');
        }

        // Save the current theme to localStorage
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
    });
});

// Function to update the icon on the toggle button
function updateIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'dark-mode') {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Change icon to moon for dark mode
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Change icon to sun for light mode
    }
}
