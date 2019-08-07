// Global data.
// A few todos in there to start with!
// This is mostly for testing purposes.
// let todos = [
//   `Be able to mark todos "done".`,
//   `Allow user interaction through the DOM`,
//   `Add dates to todos.`,
// ];

// let completed = [
//   false,
//   false,
//   false,
// ]

// Or the ALTERNATE method:
let todos = [
  // [`Be able to mark todos "done".`, false],
  // [`Allow user interaction through the DOM`, false],
  // [`Add dates to todos.`, false],
]
let newTodoList = []
let addButton = document.querySelector(".add-todo");
let addBar = document.querySelector(".todo-input");
let completeBar = document.querySelector(".number-input");
let completeButton = document.querySelector(".mark-todo-complete")
// let listingTasks = document.querySelector(".todo-list")
// let theTaskList = document.createElement("li")
// theTaskList.innerText = task;
// listingTasks.appendChild(theTaskList)

function printList(task){
  let listingTasks = document.querySelector(".todo-list");
  let theTaskList = document.createElement("li");
  theTaskList.innerText = task;
  listingTasks.appendChild(theTaskList);

  console.log(task);
}
printList()

function addTask(){
  let i = 0 
  while (
    i > todos.length){
      newTodoList.push(todos[i][0])
      i = i +1
      }
}

addButton.addEventListener("click", function () {
  addTodos(addBar.value);
  printList(addBar.value);
  addBar.value = "";
}
)
completeBar.addEventListener("click", function () {
  completeTodos(completeBar.Value);
  printsList(newToDolist)
 
}
)

function addTodos(task) {
  todos.push(task) + false;
}

addTodos()



function completeToDos(task) {
  todos.pop(task = task + true);
}

function numberingList(task,) {
  let i = 0
  while( i > task[0][i]){
  task = i + addTask + [1]}
  i = i +1
}
