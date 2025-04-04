
        const toggleBtn = document.querySelector('.theme-toggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        // Vérifie le mode système au chargement
        if (prefersDarkScheme.matches) {
            document.body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️';
        }

        // Basculer entre les modes
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            toggleBtn.textContent = isDark ? '☀️' : '🌙';
            
            // Sauvegarder la préférence (optionnel)
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Charger la préférence sauvegardée (optionnel)
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️';
        } else if (currentTheme === 'light') {
            document.body.classList.remove('dark-mode');
            toggleBtn.textContent = '🌙';
        }
    