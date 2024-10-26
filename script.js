alert("DO YOU WANT TO PLAY");

const button = document.getElementById('skewButton');
const div = document.getElementById('MyDiv'); 
const needle = document.querySelector('.needle');
const sidebar = document.getElementById('sidebar');

button.addEventListener('click', () => {
    div.classList.toggle('skewed');
    needle.classList.toggle('rotate');
});

const togglePopup = () => {
    sidebar.classList.toggle('show'); 
};


const closePopup = () => {
    sidebar.classList.remove('show'); 
};
