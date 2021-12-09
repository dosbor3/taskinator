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

  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 
  listItemEl.textContent = "This is a new task."; 
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);
    



