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

let us make the 2 divs
- one with the class of header
- one with the class of board
  - inside the board div we will have 3 divs with the classes of column
    - one with the id of todo
    - one with the id of in-progress
    - one with the id of done

- inside each column div we will have a h2 with the name of the column and add an hr below it

- inside each column div we will have a div with the class of task-container

we have 2 attributes or events that we can use to make the tasks draggable

- ondragover
- ondrop

```

### third step

```

```
