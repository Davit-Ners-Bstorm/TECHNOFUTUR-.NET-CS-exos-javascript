// Exercice 1
// Recuperation des elements HTML
const inputName = document.getElementById('nom');
const inputAge = document.getElementById('age');
const res1 = document.getElementById('res1');
const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    const name = inputName.value;
    const age = inputAge.value;
    // res1.textContent = "Bonjour, je m'appelle " + name + ", et j'ai " + age + ' ans.';
    res1.textContent = `Bonjour, je m'appelle ${name}, et j'ai ${age} ans`;
});
