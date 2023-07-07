'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 16;

document.querySelector('.guess').value = 80;
console.log(document.querySelector('.guess').value)
*/
const checkbtn = document.querySelector('.check')
checkbtn.addEventListener('click', function(){
    console.log(document.querySelector('.guess').value);
})
console.log(checkbtn);

