const themeToggle = document.getElementById('themeToggle')
console.log(themeToggle)
const themeToggleLabel = document.getElementById('themeToggleLabel');

themeToggle.addEventListener('change', function() {
    console.log("strin")
    document.body.classList.toggle('dark-theme');
    // Save the user's preference to localStorage
    localStorage.setItem('darkThemeEnabled', this.checked);
});

// Check if dark theme preference is saved in localStorage and apply it
const darkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
themeToggle.checked = darkThemeEnabled;
if (darkThemeEnabled) {
    document.body.classList.add('dark-theme');
}
