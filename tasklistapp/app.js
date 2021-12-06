//Define Ui variables

const taskInput=document.querySelector('#task');
const form =document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearbtn= document.querySelector('.clear-tasks');
const filter =document.querySelector('#filter');





//load all event listeners

loadEventListeners();

//load event listerners function
function loadEventListeners(){
  //load DOM events
  document.addEventListener('DOMContentLoaded', getTasks );
  //add task event
  form.addEventListener('submit',addTask);
  //removing task event
  tasklist.addEventListener('click',removeTask);

  //clear all tasks event
  clearbtn.addEventListener('click',clearTasks)


  //event listener for filter tasks
  filter.addEventListener('keyup', filterTasks);

}







//EVENTS START
//get tasks from local storage anddisplay
function getTasks(e){
  let thetasks;
  if(localStorage.getItem('tasks')===null){
    thetasks=[];
  }else{
    thetasks=JSON.parse(localStorage.getItem('tasks'));
  } 
  
  thetasks.forEach(function(task){
    //creating the list element  
    const listItem =document.createElement('li');
    //adding classname
    listItem.className='collection-item';
   //adding text node
   listItem.appendChild(document.createTextNode(task));
   
   
   //creating the remove button
   const link=document.createElement('a');
   link.className='delete-item secondary-content';
   
   link.innerHTML=`<span class="material-icons orange600">dangerous</span>`;
   link.style.cursor='pointer';
   link.style.color='#26a69a';
   //adding link to list item
   listItem.appendChild(link);
   
   //appending taskList
   
   tasklist.appendChild(listItem); 


  })
  e.preventDefault();
}








//add task
function addTask(e){
if(taskInput.value===""){
  alert('enter a task');
}

  //creating list element
 const listItem =document.createElement('li');
 //adding classname
 listItem.className='collection-item';
//adding text node
listItem.appendChild(document.createTextNode(taskInput.value));


//creating the remove button
const link=document.createElement('a');
link.className='delete-item secondary-content';

link.innerHTML=`<span class="material-icons orange600">dangerous</span>`;
link.style.cursor='pointer';
link.style.color='#26a69a';
//adding link to list item
listItem.appendChild(link);

//appending taskList

tasklist.appendChild(listItem);

//store tasks to local storage
storeTaskInLocalStorage(taskInput.value);

//clearvalue
taskInput.value='';

// //removechild  my code
// link.addEventListener('click',removeItem)

// function removeItem(e){
//   tasklist.removeChild(listItem);
// }

 e.preventDefault();

}

//store task input function
 function storeTaskInLocalStorage(task){
  let thetasks;

  if(localStorage.getItem('tasks')===null){
    thetasks=[];
  }else{
    thetasks=JSON.parse(localStorage.getItem('tasks'));
  }

  thetasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(thetasks));
 }




//creating removeTask event handler youtube code;

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();

       //REMOVE FROM LOCAL STORAGE 
   removeTasksFromLocalStorage
   (e.target.parentElement.parentElement);
    }
  }

}


//REMOVE FROMM LOCAL STORAGE
function removeTasksFromLocalStorage(taskItem){
  //where taskItem  e.target.parentElement.parentElement
  let thetasks;

  if(localStorage.getItem('tasks')===null){
    thetasks=[];
  }else{
    thetasks=JSON.parse(localStorage.getItem('tasks'));
  }


  thetasks.forEach(function(task, index){
    if(taskItem.textContent=task){
      thetasks.splice(index, 1);
    }
  })  

  localStorage.setItem('tasks',JSON.stringify(thetasks));

}//REMOVE FROMM LOCAL STORAGE


//event handler for clear task
function clearTasks(e){
// tasklist.innerHTML="";

  while(tasklist.firstChild){
    tasklist.removeChild(tasklist.firstChild);
  }


  //CLEAR TASKS FROM LOCAL STORAGE
  localStorage.clear();
}



///filter tasks event handler.
function filterTasks(e){
  const text= e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item= task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text)!= -1){
        task.style.display='block';
      }else{
        task.style.display='none';
      }
    }
  )
}

  
//EVENTS END


