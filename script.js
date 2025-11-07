console.log("Script chargé !")
const robin = document.querySelector('#robin');

robin.addEventListener('click', () => {
  console.log('Bouton cliqué !');
});
const themeButton = document.querySelector('#theme-toggle')
themeButton.addEventListener('click', () => {
  document.body.classList.toogle('dark-mode')
})


