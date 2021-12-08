const redbtn=document.querySelector('.btn-danger');
console.log(redbtn);
redbtn.addEventListener('click',function(e){
    document.body.style.backgroundColor='red';
    alert('This is red');
    e.preventDefault()
})

const yellbtn=document.querySelector('.btn-warning');

yellbtn.addEventListener('click',function(e){
    document.body.style.backgroundColor='#FFFF00';
    alert('This is yellow');
})

const greenbtn=document.querySelector('.btn-success')

greenbtn.addEventListener('click',function(e){
    document.body.style.backgroundColor='#228B22';
    alert('This is green');
})