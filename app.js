const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUl = phrase.querySelector('ul');

const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const main = document.querySelector('.title');
const header = document.querySelector('.header');

let letter = className ='letter';

const missed = 0; 


startButton.addEventListener('click' ,  () => {
    overlay.style.visibility = 'hidden';

});


const phrases = ['Bald ' , 'Cutie Pie ', 'BodyGuard' , 'Covered in money ', 'Bald Remix']; 

function getRandomPhraseAsArray (arr) {
let split = [];
for (var i=0; i<arr.length; i++) {
    return split += arr[Math.floor(Math.random()*arr.length)].split('');
}


};

function addPhrasetoDisplay (arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        return phraseUl.appendChild(li);
    }

    }

    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhrasetoDisplay(phraseArray); 
    


