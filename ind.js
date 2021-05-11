var list=document.getElementById('todo-list');
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


