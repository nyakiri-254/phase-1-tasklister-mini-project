document.addEventListener("DOMContentLoaded", () => {
  const taskList = new Tasklist();

  const newTaskForm =document.getElementById("create-task-form");
  const newTaskDescription =document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //additional tasks
  const newtaskUl =document.getElementById("tasks");


  //addEventListener

  newTaskForm.addEventListener("submit", createNewTask);
});
  const createNewTask = e =>{
    e.preventDefault();
    const newTaskDescription =document.getElementById("new-task-description");
      const newTask = document.createElement("li");
    newTask.innerText= newTaskDescription.value;

    appendNewTask(newTask);
    e.target.reset();
    
  };

  const appendNewTask = task =>{
    document.getElementById("task").appendChild(task);};
  