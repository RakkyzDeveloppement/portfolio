const competences = document.getElementById('competences');
const test = document.getElementById('test');

competences.addEventListener('click', () => {
    test.classList.add('visible');
});
