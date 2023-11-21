const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        display.style.backgroundColor = e.target.id;
    });
});
