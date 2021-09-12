'use strict';

var number;
var counter;
var score;
var highScore = 0;
var checkButton = document.querySelector('.check');
resetValues();
var againButton = document.querySelector('.again');

checkButton.addEventListener('click', logic);
againButton.addEventListener('click', resetAll);

function numberGenerator() {
  return  Number(Math.floor(Math.random()* 20 + 1));
}

function resetValues() {
    number = numberGenerator();
    console.log(number);
    checkButton.disabled = false;
    counter = 1;
    score = 20;
}

function resetAll() {
    resetValues();
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
};

 function logic() {
    const guess = Number (document.querySelector('.guess').value);
    if (counter < 20){
        if (!guess) {
            document.querySelector('.message').textContent = 'No number :(';
        } else {
            counter ++;
            console.log(counter)
            if(guess > number) {
                document.querySelector('.message').textContent = 'Too high';
                document.querySelector('.score').textContent = score;
                score --;
                console.log(score);
                }
            if (guess < number) {
                document.querySelector('.message').textContent = 'Too low';
                document.querySelector('.score').textContent = score;
                score --;
                }
            if (guess === number ) {
                document.querySelector('.message').textContent = 'Bingo!'
                document.querySelector('.score').textContent = score;
                document.body.style.backgroundColor = '#60b347';
                document.querySelector('.check').disabled;
                document.querySelector('.number').textContent = '!';
                checkButton.disabled = true;
                if (score > highScore) {
                    highScore = score;
                    document.querySelector('.highscore').textContent = highScore;
                    }
                }
        }
    } else {
        document.querySelector('.message').textContent = 'Game over :(';
        document.querySelector('.score').textContent = '0';
        checkButton.disabled = true;
        document.body.style.backgroundColor = '#ff0000';
    }
};