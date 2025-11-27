const imagenav1 = document.getElementsByClassName('imagenav1');
const imagenav2 = document.getElementsByClassName('imagenav2');
const imagenav3 = document.getElementsByClassName('imagenav3');
const btnprojets = document.getElementById('btnprojets');
const btncontact = document.getElementById('btncontact');
const btncompetences = document.getElementById('btncompetences');
const competences = document.getElementById('competences');


btncompetences.addEventListener('click', () => {
    competences.classList.toggle('visible');
});
