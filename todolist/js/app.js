const form=document.getElementById('task-form');
const taskinput=document.getElementById('tasklist');
const filter=document.getElementById('filter');
const tasklist=document.querySelector('.collection');
const clearbtn=document.querySelector('.clear-tasks');


function addtask(e){


    // console.log('abc');

    if(taskinput.value===""){
        window.alert("Add task");
        return;
    }

    // create Element
    const li=document.createElement('li');
    
    //classname
    li.className="collection-item";

    //create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));

    // create a element
    const link=document.createElement('a');

    //classname
    link.className="delete-item secondary-content";

    //inner icon
    link.innerHTML=`<i class="far fa-trash-alt"></i>`;

    li.appendChild(link);

    tasklist.appendChild(li);

    // taskinput.value="";
    // taskinput.focus();
    // console.log(link);

    // console.log(li);

    storetaskinlocalstorage(taskinput.value);

    e.preventDefault();
}

function removetask(e){

    // console.log('hay');

    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete item');
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }

                                //i     a               li    
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}


function cleartasks(){
    // console.log('clear tasks');

    //method1
    // tasklist.innerHTML="";

    //method2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);
     // let x=0;
    // while(x < tasklist.childElementCount){
    //     tasklist.removeChild(tasklist.firstChild);
    // }

    //Method3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    clearalllocalstorage();
}

// storetask

function storetaskinlocalstorage(task){

    // console.log(task);

    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
        // console.log(typeof tasks);
    }

    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));
    
}

//get tests from local storage
function gettests(){
    // console.log('hay');

    let tasks;

    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task=>{
        // console.log(task);

        //create element
        const li=document.createElement('li');
        
        // add class
        li.className="collection-item";

        //create element append to li
        li.appendChild(document.createTextNode(task));

        //create link
        const link=document.createElement('a');

        link.className="delete-item secondary-content";

        link.innerHTML=`<i class="far fa-trash-alt"></i>`;

        li.appendChild(link);

        tasklist.appendChild(li);        
    });
}

//remove task from local storage
function removetaskfromlocalstorage(removetask){

    console.log(removetask);
    
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{

        if(removetask.innerText===task){
            tasks.splice(index,1);
        }
    })

    localStorage.setItem('tasks',JSON.stringify(tasks))

}

//clear all data from local storage
function clearalllocalstorage(){
    localStorage.clear();
}


// to filter tasks
function filtertask(e){
    // console.log('hay');

    const inputfilter=e.target.value.toLowerCase();
    console.log(inputfilter);

    const tasks=document.querySelectorAll('.collection-item');

    tasks.forEach(task=>{

    const item=task.firstChild.textContent.toLowerCase();

    //Method1
    // if(item.indexOf(inputfilter) !== -1){
    //     task.style.display="block";
    // }else{
    //     task.style.display="none";
    // }

    //Method2
    if(task.textContent.toLowerCase().includes(inputfilter)){
        task.style.display="block";
    }else{
        task.style.display="none";
    }

    });

}



// gettests();
document.addEventListener('DOMContentLoaded',gettests);

//add task
form.addEventListener('submit',addtask)

// remove task
tasklist.addEventListener('click',removetask);

//clear all tasks
clearbtn.addEventListener('click',cleartasks);

//filter task event
filter.addEventListener('keyup',filtertask);
