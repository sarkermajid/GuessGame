let mainbtn = document.querySelector('#mainbtn');
let guessbtn = document.querySelector('#guessbtn');

mainbtn.addEventListener('click',function(){
    let guess = document.querySelector('.guess');
    let main = document.querySelector('.main');
    let mainNumber = document.querySelector('#mainNumber');
    
    guess.style.display = 'block';
    main.style.display = 'none';
})

guessbtn.addEventListener('click',function(){
    let guessNumber = document.querySelector('#guessNumber');
    let result = document.querySelector('.result');

    if(+guessNumber.value > +mainNumber.value){
        result.style.display = 'block';
        result.innerHTML = "Result : Your Guess Number is Grater Than Main Number";
    }else if(+guessNumber.value < +mainNumber.value){
        result.style.display = 'block';
        result.innerHTML = 'Result : Your Guess Number is Less Than Main Number';
    }else if (+guessNumber.value == +mainNumber.value){
        result.style.display = 'block';
        result.innerHTML = 'Result : Congratulation, You Have Won The Game!!!';
        guessNumber.style.display = 'none';
        guessbtn.style.display = 'none';
    }

    let youGuess = document.querySelector('#youGuess')
    let youGuessValue = document.createElement('h1');
    youGuess.appendChild(youGuessValue).innerHTML = guessNumber.value;

    if(youGuess.children.length > 5){
        guessNumber.style.display = 'none';
        guessbtn.style.display = 'none';
        result.style.display = 'block';
        result.innerHTML = 'Result : Failed,Please Try Again!!!';
        result.style.backgroundColor = 'red';
    }
})
