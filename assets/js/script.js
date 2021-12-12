var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");
var taskIdCounter = 0;
var pageContentEl = document.querySelector("#page-content");


var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value; //<-- search by attribute name
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
  alert("You need to fill out the task form!");
  return false;
}

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
};

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
}


var createTaskEl = function(taskDataObj) {
  //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //add task id as a custom attribute
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  //create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  
  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  
  //reset the form
  formEl.reset();

  //Increment the counter
  taskIdCounter ++;
 };

 var createTaskActions = function(taskId) {
   //creating a new div element with the "task-actions" class name to hold the edit and delete buttons
   var actionContainerEl = document.createElement("div");
   actionContainerEl.className = "task-actions";

   //creating edit button
   var editButtonE1 = document.createElement("button");
   editButtonE1.className = "btn edit-btn";
   editButtonE1.textContent = "Edit";
   editButtonE1.setAttribute("data-task-id", taskId);

   actionContainerEl.appendChild(editButtonE1);

   //creating the delete button
   var deleteButtonE1 = document.createElement("button");
   deleteButtonE1.className = "btn delete-btn";
   deleteButtonE1.textContent ="Delete";
   deleteButtonE1.setAttribute("data-task-id", taskId);

   actionContainerEl.appendChild(deleteButtonE1);

   var statusSelectEl = document.createElement("select");
   statusSelectEl.className = "select-status";
   statusSelectEl.setAttribute("name", "status-change");
   statusSelectEl.setAttribute("data-task-id", taskId);
   
   actionContainerEl.appendChild(statusSelectEl);

   var statusChoices = ["To Do", "In Progress", "Completed"];

   for (var i = 0; i < statusChoices.length; i++) {
      // create option element
      var statusOptionEl = document.createElement("option");
      statusOptionEl.textContent = statusChoices[i];
      statusOptionEl.setAttribute("value", statusChoices[i]);
    
      // append to select
      statusSelectEl.appendChild(statusOptionEl);
  }

   

   return actionContainerEl;

 };

 var taskButtonHandler = function(event) {
  //get target element from event
  var targetEl = event.target;
  
  //delete button was clicked 
  if (event.target.matches(".delete-btn")) {
     var taskId = event.target.getAttribute("data-task-id");
     deleteTask(taskId);
  }
  else if (targetEl.matches(".edit-btn")){
    var taskId = event.target.getAttribute("data-task-id");
    editTask(taskId);
  }
};

var deleteTask = function(taskId) {
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.remove();
};

var editTask = function(taskId) {
  // get task list item element
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // get content from task name and type
  var taskName = taskSelected.querySelector("h3.task-name").textContent;
  var taskType = taskSelected.querySelector("span.task-type").textContent;

  document.querySelector("input[name='task-name']").value = taskName;
  document.querySelector("select[name='task-type']").value = taskType;
  document.querySelector("#save-task").textContent = "Save Task";

  formEl.setAttribute("data-task-id", taskId);  // <-- adds the taskId to a data-task-id attribute on the form itself
  
};

formEl.addEventListener("submit", taskFormHandler);
pageContentEl.addEventListener("click", taskButtonHandler);

