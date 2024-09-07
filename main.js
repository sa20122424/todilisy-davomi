let input = document.querySelector("input");
let errorP = document.querySelector(".error-text");
let pAddDiv = document.querySelector(".texts");

function todoList(e) {
  e.preventDefault();
  
  if (input.value.trim() === "") {
   
  } else {
    
    
    let div = document.createElement("div");
    pAddDiv.append(div);
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.color = "white";
    
    let todoText = document.createElement("p");
    todoText.classList.add('todo-p');
    todoText.textContent = input.value;
   
    div.append(todoText);
    
    let editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.style.border = 'solid 3px blue';
    editButton.style.backgroundColor = 'blue';
    editButton.style.marginLeft = '130px';
    editButton.style.color = 'white';
    editButton.onclick = editTodoItem;
    div.append(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.style.border = 'solid 3px red';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.onclick = deleteTodoItem;
    div.append(deleteButton);
    
    input.value = '';
  }
}

function deleteTodoItem(e) {
  if (window.confirm("Rostan ham ushbu element ni o'chirmoqchimisiz?")) {
    let divToDelete = e.target.parentElement;
    divToDelete.remove();
  }
}

function toggleTextStyle(e) {
  let p = e.target;
  let newColor = window.prompt("Yangi rangni kirgizing (masalan, 'yellow' yoki 'white'):", p.style.color || 'white');
  if (newColor) {
    p.style.color = newColor;
    p.style.fontWeight = 'bold'; 
  }
}

function editTodoItem(e) {
  let p = e.target.parentElement.querySelector('.todo-p');
  let newText = window.prompt("Yangi matnni kirgizing:", p.textContent);
  if (newText !== null && newText.trim() !== "") {
    p.textContent = newText;
  }
}