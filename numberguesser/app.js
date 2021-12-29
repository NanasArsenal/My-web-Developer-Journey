 /*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/
//game values
let min=1,
    max=10,
    winningNum = getRandomNumber(min,max),
    guessesLeft=3;

//getting dom items

const game =document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn       = document.querySelector('#guess-btn'),
      message        = document.querySelector('.message');





  
 //assigning UI min and mmax
 minNum.textContent=  min;
 maxNum.textContent = max;

 //play again event listener
 game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
        window.location.reload()
    }
 })

 //listen for guess

  guessBtn.addEventListener('click', function(){
      let guess = parseInt(guessInput.value);

    //validation
    if(isNaN(guess)||guess< min||guess>max){
       setMessage(`enter a number between ${min} and ${max} `, 'red');
    }


    //check if won
    if(guess===winningNum){
    //GAME OVER GAME WON
        gameOver(true,`${winningNum} is the perfect guess,YOU WON!!`,'green')

    }else{

      guessesLeft = guessesLeft-1;

        if(guessesLeft===0){
         //GAME OVER GAME LOST 
            gameOver(false,`YOU LOSER!!  GAME OVER. The correct number was ${winningNum}`,'red')
           
        }else{
            //game continues 
            guessInput.style.borderColor='red';
            //clear input
            guessInput.value='';
            setMessage(`Guess is not correct ,${guessesLeft} guesses left`,'red')

        }

    }

  })


  //create gaem over function

  function gameOver(won,msg,color){


    won===true ? color='green': color = 'red';


    //GAME OVER GAME WON/lost
    //disable user input
    guessInput.disabled = true;
    guessBtn.disabled=false;

    //make border green
    guessInput.style.borderColor = color;
    message.style.color= color;

    //message
    setMessage(msg);

    //play again
    guessBtn.value='play again';

    guessBtn.className+='play-again';


  }

  //get random number

  function getRandomNumber(min , max){
    return parseInt(Math.random()*(max - min + 1))
  }


  //reusable set function

  function setMessage(msg,color){
      message.style.color=color;
      message.textContent= msg;
  }