/////////////////////////////////////////////////
const title = document.createElement("h2");
title.textContent = "Ma Todo List";
document.body.appendChild(title);
/////////////////////////////////////////////////
const input = document.createElement("input");
input.type = "text";
input.id = "taskInput";
input.placeholder = "Écris ta tâche ici";
document.body.appendChild(input);
/////////////////////////////////////////////////
const button = document.createElement("button");
button.textContent = "Ajouter";
document.body.appendChild(button);
/////////////////////////////////////////////////
const ul = document.createElement("ul");
ul.id = "todolist";
document.body.appendChild(ul);

/////////////////////////////////////////////////
button.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
      deleteBtn.className = "delete-btn";

      deleteBtn.addEventListener("click", () => {
        ul.removeChild(li);
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      ul.appendChild(li);

      input.value = "";
    } 
    
    else {
      alert("Écris une tâche d'abord !");
    }
  });