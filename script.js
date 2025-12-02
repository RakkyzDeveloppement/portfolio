
const imagenav1 = document.getElementsByClassName('imagenav1');
const imagenav2 = document.getElementsByClassName('imagenav2');
const imagenav3 = document.getElementsByClassName('imagenav3');
const espacepresentation = document.getElementsByClassName('espacepresentation');
const btnprojets = document.getElementById('btnprojets');
const btncontact = document.getElementById('btncontact');
const btncompetences = document.getElementById('btncompetences');
const competences = document.getElementById('competences');
const carousel = document.getElementById('carouselprojets');

btncompetences.addEventListener('click', () => {
    competences.classList.toggle('visible');
});

btnprojets.addEventListener('click', () => {
    carouselprojets.classList.toggle('visible');
});

btncompetences.addEventListener('click', () => {
    espacepresentation.classList.toggle('invisible');
});
