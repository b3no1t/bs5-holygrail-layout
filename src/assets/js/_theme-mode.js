// Gestion de l'icône du thème
function updateThemeIcon(theme) {
 /*
 Cette fonction JavaScript, updateThemeIcon, met à jour l'icône du thème en fonction du thème actuel. Elle alterne la visibilité des icônes soleil et lune, affichant l'icône soleil lorsque le thème est 'clair' et l'icône lune lorsque le thème est 'sombre'.
 */
 const sunIcon = document.querySelector('[data-theme-icon-active="bi-sun-fill"]');
 const moonIcon = document.querySelector('[data-theme-icon-active="bi-moon-fill"]');

 sunIcon?.classList.toggle('theme-icon-active', theme === 'light');
 moonIcon?.classList.toggle('theme-icon-active', theme === 'dark');
}


function initTheme() {
 /*
 Cette fonction JavaScript, initTheme, initialise le thème en vérifiant les préférences de l'utilisateur et en appliquant le thème approprié. 
 Elle lit le thème depuis localStorage ou utilise la préférence système si aucun thème n'est défini.
 */
 const theme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

 document.documentElement.setAttribute('data-bs-theme', theme);
 updateThemeIcon(theme);

 document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-bs-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
 });
}

export { initTheme, updateThemeIcon };