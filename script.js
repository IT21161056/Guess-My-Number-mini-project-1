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
let secretNumber = Math.trunc(Math.random()*20)+1;

let highScore = Number(document.querySelector('.highscore').textContent);
let score = 20;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

checkbtn.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('⛔ No number');
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')

        document.querySelector('.number').textContent = secretNumber; 
        document.querySelector('.number').style.width = '30rem';
        document.body.style.background = '#60b347'
       
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1){
            // document.querySelector('.message').textContent = 
            // guess > secretNumber ? '📈 Too high!': '📉 Too low!';
            // guess > secretNumber ? displayMessage('📈 Too high!')
            // :displayMessage('📉 Too low!')

            displayMessage(guess > secretNumber ? '📈 Too high!': '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            displayMessage('💥 You lost the game!')
        }
    }
    document.querySelector('.guess').value = '';
});



const againBtn = document.querySelector('.again').addEventListener('click', function (){
   
    document.body.style.background = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
})

