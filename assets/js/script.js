//we added an event to the entire form, and removed ithe click event listener from the submit button
//Having the click event listener on the submit button limited the features we can use, so we added the 
//submit event listener instead of the click event listener to the form.  If we were to keep the click event 
//listener on the form, each time the user clicks anywhere on the form, the createTaskHandler function would be 
//called, THIS IS NOT WHAT WE WANT!!!  We only want to browser to respond to a click of the submit button or preseeing
//the ENTER key.  We will use the form-specific event listener called submit (also called the onsubmit).  This listener
//listens
var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

//
var createTaskHandler = function(event) { 
  event.preventDefault(); //legacy browser behavior fix... in the past browsers would refresh the entire page 
                          //every time you submit the form, this is no longer necessary, as it was used to help
                          //browsers communicate with servers, but JavaScript does most of this nowbut this default 
                          //is still in use. As a fix, you would call the preventDefault() which stops the page refreshing 
                          //that occurs by default
var taskNameInput = document.querySelector("input[name='task-name']").value;
var taskTypeInput = document.querySelector("select[name='task-type'").value;
console.log(taskNameInput);
console.log(taskTypeInput);


// create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");

// give it a class name
taskInfoEl.className = "task-info";

// add HTML content to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
}; 

  formEl.addEventListener("submit", createTaskHandler);
    



