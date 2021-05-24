var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector(".task-list");

var createTaskHandler = function () {
  var taskListItemEl = document.createElement("li");
  taskListItemEl.textContent = prompt("Describe the task");
  if (taskListItemEl.textContent) {
    taskToDoEl.append(taskListItemEl);
    taskListItemEl.className = "task-item";
  }
};

buttonEl.addEventListener("click", createTaskHandler);
