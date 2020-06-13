const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUl = phrase.querySelector('ul');

const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const main = document.querySelector('.title');
const header = document.querySelector('.header');



const missed = 0; 


startButton.addEventListener('click' ,  () => {
    overlay.style.visibility = 'hidden';

});


const phrases = ['Bald ' , 'Cutie Pie ', 'Body Guard' , 'Covered in money ', 'Bald Remix']; 

function getRandomPhraseAsArray (arr) {
  let split = [];
  for (var i=0; i<arr.length; i++) {
      return split += arr[Math.floor(Math.random()*arr.length)];
  }
}
function addPhrasetoDisplay (arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent=arr[i];
        phraseUl.appendChild(li);
        if (arr[i] != ' ') {
            li.className='letter';

        } else {

          li.className = 'space';
        }
    }

    }
    

qwerty.addEventListener('click' , (e)=> {
 
 if (e.target.tagName === 'BUTTON') {
  const clicked = event.target;
  clicked.className='chosen';
   clicked.disabled= true;
 }
const checkLetter = function checkLetter (button) {
  let letter = document.querySelectorAll('.letter');
let matchingLetter = null;
       for (let i = 0; i< letter.length; i++) {
         
          if ( button === letter[i].textContent) {
          letter[i].className = 'letter show';
          matchingLetter=letter[i].textContent;
       } 
          

      return  matchingLetter;


    } 
  }

      

  

});
const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

