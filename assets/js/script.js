//assign the button element object representation to a variable in the file:
var buttonEl = document.querySelector("#save-task");

//adding the DOM object reference 
var tasksToDoEl = document.querySelector("#tasks-to-do");

//function that upon user click of the button, create a li
//set the class name for the li, set the textContent, and append the 
//li to the ul 
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    tasksToDoEl.appendChild(listItemEl);
}

//storing the DOM object reference (list item) in a variable
buttonEl.addEventListener("click", createTaskHandler); // <-- DONT ADD () behind the function name, serves as function call
    



