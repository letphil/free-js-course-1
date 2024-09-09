## Kanban

```
kanban board is a tool for managing work and workflow.
with drag and drop functionality you can move tasks between columns. like to do, in progress, done.

```

### first step

```
let us use the bang command to create the html layout ( index.html )

we will have 2 sections in the body

the head section which will contain the title of the page

the board section which will contain the kanban board where we will have 3 columns ( to do, in progress, done )

```

### second step

```
the style.css is already in the project so we can use it to style the kanban board

let us get the roboto font from google fonts and add it to the head section
  <link rel="stylesheet" href=
"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">

let us make the 2 divs
- one with the class of head
- one with the class of board
  - inside the board div we will have 3 divs with the class of column
    - one with the id of todo
    - one with the id of in-progress
    - one with the id of done

- inside each column div we will have an h2 with the name of the column and add an hr below it

- inside each column div we will have a div with the class of task-container

we have 2 attributes or events that we can use to make the tasks dragged and dropped

- ondragover
- ondrop

inside the the first column div ( todo ) we will need to be able to add a new task
so we will need another div in there with the class of tasks-in-btn
and inside it we will have an input with id of taskInput and a button with a class of add-task-btn and add an event onclick to it.

```

### third step

```
let's add the script tag to the bottom of the body

first we will need to use local storage to load up the tasks that we had before
if none before we will need to create an empty array

1. get items from local storage key of 'tasks' [ x ]

2. now in event 'DOMContentLoaded' we will need to render the tasks on the board [ x ]

3. let us make the renderTasks function [ x ]
  - first we will need to clear the tasks from the board
  - then we will loop through the tasks and add them to the board

4. createTaskElement function to create the task element [ x ]

5. make function to delete task


6. function allow drop[ x]
function allowDrop(event) {
  event.preventDefault()
}

7. drag function [ x]
function drag(event) {
  event.dataTransfer.setData('text/plain', event.target.id)
}

8. drop function [ x]

9. capitalize input
function capitalizeInput(input) {
  input.value = input.value.toUpperCase()
}

10. add task function
- { id: "task-" + Date.now(), content: taskContent, status: columnId }


11. function to update task status when moved to another column 'updateTaskStatus'


12. function to update local storage, storage with current tasks
function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}





```
