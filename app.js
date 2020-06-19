const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const phraseUl = phrase.querySelector('ul');
const lives = document.querySelectorAll('.tries');
const startButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const headline = overlay.querySelector('.title');
const main = document.querySelector('.title');
const header = document.querySelector('.header');
const livesLi = document.querySelectorAll("#scoreboard ol li");
const triesImg = document.querySelectorAll(".tries img");


let missed = 0; 



const phrases = [
  'bald ' , 
'cutie pie ', 
'body guard' , 
'covered in money ', 
'bald remix'];
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


  function checkLetter (button) {
    let letter = document.querySelectorAll('.letter');
  let matchingLetter = null;
         for (i = 0; i< letter.length; i++) {
           
            if ( button == letter[i].textContent) {
            letter[i].className = 'letter show';
            matchingLetter = letter[i].textContent;
         } 
            
  
       
  
  
      } 
      return  matchingLetter;
    }



function checkWin () {
let letters = document.getElementsByClassName('letter');
let shown = document.getElementsByClassName('shown');
if (shown.length == letters.length) {
  overlay.className = 'win';
  headline.textContent='You Won !';
  overlay.style.visibility = "visible";
startButton.textContent= 'try again';
}else if(missed >=5) {
  overlay.className = 'lose';
  header.textContent="You Lose";
  overlay.style.visibility = "visible";

  startButton.textContent='Try again';

}
}
function resetGame() {
  missed = 0;
  const keyboard = document.querySelectorAll("button");
  for (let i = 0; i < keyboard.length; i++) {
    keyboard[i].className = "";
    keyboard[i].disabled = false;
  }
  phraseUl.textContent = "";
  for (let i = 0; i < livesLi.length; i++) {
    livesLi[i].className = "tries";
    triesImg[i].src = "images/liveHeart.png";
  }
}



startButton.addEventListener('click' ,  () => {
  overlay.style.visibility = 'hidden';
  resetGame();
  header.textContent="Wheel of success";
  const newPhrase = getRandomPhraseAsArray(phrases);
  addPhrasetoDisplay(newPhrase);
});

    

qwerty.addEventListener('click' , (e)=> {
 
 if (e.target.tagName === 'BUTTON') {
  const clicked = event.target;
  clicked.className='chosen';
   clicked.disabled= 'true';
 const letterFound = checkLetter(clicked.textContent);
 if (letterFound === null) {
const tries = document.querySelectorAll('.tries');
const heart = document.querySelectorAll('.tries img');
missed += 1;
heart[0].src = 'images/lostHeart.png';
tries[0].className="";
 }
 checkWin();



 }



      

  

});


