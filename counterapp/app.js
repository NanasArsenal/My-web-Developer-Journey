let count=0;

const h1=document.querySelector('.counter h1');


document.querySelector('.decrease').addEventListener('click',decreaseEvent);

//decrease event
function decreaseEvent(e){
  
    h1.textContent=count--;

}

//reset
document.querySelector('.reset').addEventListener('click',resetEvent);
//reset event
function resetEvent(e){
    count=0;
    h1.textContent=count;
}

document.querySelector('.increase').addEventListener('click', increaseEvent)

//increment
function increaseEvent(e){
    count=count+1;
    h1.textContent=count;
}


console.log(h1);
