let bar=document.querySelector('#bar');
let prev_guess=document.querySelector('#Previous-guesses');
let result=document.querySelector('.Result');
let result_explain=document.querySelector('.Result-explain');
let prev_para=document.querySelector('.prev-guess-para');
let new_game=document.querySelector('.start-new-game');
let submitButton=document.querySelector('.submit-btn');
let randomNumber=Math.floor((Math.random()*100)+1);
let count=0;

bar.addEventListener("keypress", function (event) {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
});

bar.addEventListener("keydown",function(event)
{
    if(event.key==="Enter")
    {
        submit();
    }
})
function reset()
{
  bar.value='';
   bar.disabled=false;
   submitButton.disabled=false;
  let barValue=Number(bar.value); 
  new_game.classList.remove('newGame');
     result.classList.remove('wrong');
     result.classList.remove('right');
     result.innerHTML=''
    result_explain.innerHTML='';
    count=0;
prev_para.classList.remove('visibility');
  prev_para.innerHTML = '';
}
function submit()
{
  let barValue=bar.value; 

if(isNaN(barValue)|| barValue.trim()==='')
{
    result.classList.add('wrong');
    result.innerHTML='Please enter a number.'
    result_explain.innerHTML='';
    return;
}
barValue=Number(bar.value);
  prev_para.classList.add('visibility');
   if (!prev_para.innerHTML.includes('Previous Guesses :')) {
    prev_para.innerHTML = 'Previous Guesses :';
  }
  prev_para.innerHTML += ` ${barValue}`;
  count +=1;

  if(barValue<randomNumber)
  {
    result.classList.add('wrong');
    result.innerHTML='Wrong!'
    result_explain.innerHTML='Your guess is low..'
  }

  else if(barValue>randomNumber)
  {
    result.classList.add('wrong');
    result.innerHTML='Wrong!'
    result_explain.innerHTML='Your guess is high..'
  }
  else
    {
         result.classList.add('right');
    result.innerHTML='Congrats!! You got it right.'
    result_explain.innerHTML='';
     bar.disabled=true;
   submitButton.disabled=true;
    new_game.classList.add('newGame');
  }

  if(count>10)
  {

   bar.disabled=true;
   submitButton.disabled=true;
    new_game.classList.add('newGame');
     result.classList.add('wrong');
     result.innerHTML='GAME OVER!!'
    result_explain.innerHTML='';
  }
   bar.value='';
}