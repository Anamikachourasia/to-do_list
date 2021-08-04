//selectors
const todoInput= document.querySelector(".todo-input")
const todoButton= document.querySelector(".todo-button")
const todoList= document.querySelector(".todo-list")
const filterOption=document.querySelector(".filter-todo")
//onclick task will bw added
document.addEventListener('DOMContentLoaded',gettodos)
todoButton.addEventListener('click',addtodo);
todoList.addEventListener('click',deleteCheck);
//filterOption.addEventListener('click',filtertodo);
//functions
//adding
todoInput.addEventListener('keyup',function(e)
  {
      if(e.keyCode===13)
      {
          addtodo();
      }
  })
function addtodo(e)
{
    // prevent form from submitting
    e.preventDefault();
    //todo div
    if(todoInput.value==="")
    {
        alert("Please add a task!");

    }
    else
    {
    const todoDiv=document.createElement("div")
    todoDiv.classList.add('todo')
    //create li
    const newtodo= document.createElement("li")
    newtodo.innerText= todoInput.value
    newtodo.classList.add("todo-item")
    todoDiv.appendChild(newtodo)
    //create check button
    // save to local storage

    saveLocaltodo(todoInput.value);
    const completeButton = document.createElement("Button")
    completeButton.innerHTML="<i class='fas fa-check'></i>";
    completeButton.classList.add("complete-btn")
    todoDiv.appendChild(completeButton)
    //create delete button
    const deleteButton = document.createElement("Button")
    deleteButton.innerHTML="<i class='fas fa-trash'></i>";
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton)
    //append to list
    todoList.appendChild(todoDiv)
    //clear input field

    todoInput.value="";
    }
}
//deleteing
function deleteCheck(e)
{
    
    const item=e.target;
    //delete
    if(item.classList[0]==='delete-btn')
    {
        const todo=item.parentElement;
        //Animation
        todo.classList.add("fall")
        removeLocalTodos(todo);
        todo.addEventListener("transitionend",function(){
            todo.remove;
        })
       
    }
    //check
    if(item.classList[0]==='complete-btn')
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }

}
// filte
/*function filtertodo(e)
{
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch (e.target.value)
    {
        case "all":
        todo.style.display="flex";
        break;
        case "Completed":
         if(todo.classList.contains("completed"))
         {
             todo.style.display="flex";
         } 
         else{
             todo.style.display="none";
         }
         break;
         case "uncompleted":
             if(todo.classList.contains("completed"))
             {
                 todo.style.display="none";
             } 
             else
             {
                 todo.style.display="flex";
             } 
             break;
    }
});

}*/

//adding to localstorage
function saveLocaltodo(todo)
{
    //check if there is a thing there
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else
    {
        todos= JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    let fix= JSON.stringify(todos);
    localStorage.setItem("todos",fix);
}
function gettodos()
{
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else
    {
        todos= JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv=document.createElement("div")
        todoDiv.classList.add('todo')
        //create li
        const newtodo= document.createElement("li")
        newtodo.innerText= todo
        newtodo.classList.add("todo-item")
        todoDiv.appendChild(newtodo)
        //create check button 
        const completeButton = document.createElement("Button")
        completeButton.innerHTML="<i class='fas fa-check'></i>";
        completeButton.classList.add("complete-btn")
        todoDiv.appendChild(completeButton)
        //create delete button
        const deleteButton = document.createElement("Button")
        deleteButton.innerHTML="<i class='fas fa-trash'></i>";
        deleteButton.classList.add("delete-btn")
        todoDiv.appendChild(deleteButton)
        //append to list
        todoList.appendChild(todoDiv)
        
    });

}
function removeLocalTodos(todo)
{
    let todos;
    if(localStorage.getItem('todos')===null)
    {
        todos=[];
    }
    else
    {
        todos= JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    let fix= JSON.stringify(todos);
    localStorage.setItem("todos",fix);

}


























































/*var list=document.getElementById('todo-list');
var inputBox=document.getElementById('todo-input');
var btnAdd=document.getElementById('add-item');
var btnUpdate=document.getElementById('update-item');
var btnRemove=document.getElementById('remove-item');
  var currentInputValue='';
  inputBox.addEventListener('input',function(e)
  {
      currentInputValue=e.target.value;
  })
  inputBox.addEventListener('keyup',function(e)
  {
      if(e.keyCode===13)
      {
          addListItem();
      }
  })
  btnAdd.addEventListener('click',function()
  {
      addListItem();
  })
  function createnew()
  {
    var newListElement=document.createElement('li')
    var textNode= document.createTextNode(currentInputValue)
    newListElement.appendChild(textNode);
    newListElement.id="item"+(list.childElementCount+1);
    newListElement.className="list-group-item";
    return newListElement;
  }
  function addListItem()
  {
      if(currentInputValue!==undefined && currentInputValue!==null && currentInputValue !=='')
      {
          var newListElement=document.createElement('li')
          var textNode= document.createTextNode(currentInputValue)
          newListElement.appendChild(textNode);
          newListElement.id="item"+(list.childElementCount+1);
          newListElement.className="list-group-item";
          list.appendChild(newListElement);
          inputBox.value=''
          currentInputValue='' 
      }
      else{
          alert('Please Enter a valid task')
      }
  }
  btnUpdate.addEventListener('click',function()
  {
      var firstelement=list.firstElementChild;
      var newListElement= createnew();
      if(currentInputValue!==undefined && currentInputValue!==null && currentInputValue !=='')
      {
      list.replaceChild(newListElement,firstelement);
      }
      else{
        alert('Please Enter a valid task')
    }
  })
  btnRemove.addEventListener('click',function()
  {
      var firstelement=list.firstElementChild;
      list.removeChild(firstelement);
  })

*/
