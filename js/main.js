const btnDarkMode = document.querySelector('.dark-mode-btn')

// Проверка темной темы на уровне настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkMode('dark')
}

// Если меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    localStorage.setItem('darkMode', newColorScheme)
    setDarkMode(newColorScheme)
})

setDarkMode(localStorage.getItem('darkMode'))

function setDarkMode(mode) {
    if(mode === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active')
        document.body.classList.add('dark')
    } else if (mode === 'light') {
        btnDarkMode.classList.remove('dark-mode-btn--active')
        document.body.classList.remove('dark')
    }
}

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}

