'use strict'


const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');


const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const corrent0El = document.querySelector('#current--0');
const corrent1El = document.querySelector('#current--1');


let playing = true;
let scores; let activePlayer; let currentScore;

const init = function(){
    diceEl.classList.add('hidden');
    scores = [0, 0]; activePlayer = 0; currentScore = 0;


    document.getElementById(`score--0`).textContent = 0;
    document.getElementById(`score--1`).textContent = 0;

    diceEl.classList.add('hidden');

    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;

    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');

    activePlayer = 0
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    playing = true;
}



//diceEl.classList.add('hidden');
//const scores = [0, 0]; let activePlayer = 0; let currentScore = 0;
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');      
}

btnRoll.addEventListener('click', function(){
    if(playing)
    {
        //1.Generate random dice roll
        const dice = Math.trunc(Math.random()*6)+1;
    
        //2.Display code  
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`

        if(dice !== 1){
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else
            switchPlayer()
    }
    
});


btnHold.addEventListener('click', function(){
    if(playing){
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]+=currentScore;
    
        if(scores[activePlayer] >= 20){
            playing = false;
            //FInish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }else
            switchPlayer();
        }
});


btnNew.addEventListener('click', function(){
    init();
});


