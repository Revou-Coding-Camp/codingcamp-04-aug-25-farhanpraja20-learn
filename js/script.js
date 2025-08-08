// Array to store todo items
let todoList = [];

function validateForm() {
    const todoInput = document.getElementById('todo-input').value.trim();
    const dateInput = document.getElementById('date-input').value;

    // Check if inputs are empty
    if (todoInput === '' || dateInput === '') {
        alert('Please enter a todo item and a due date.');
    } else {
        addTodo(todoInput, dateInput);
        document.getElementById('todo-input').value = '';
        document.getElementById('date-input').value = '';
    }
}

function addTodo(todo, date) {
    const todoItem = {
        task: todo,
        date: date,
        status: 'Pending'
    };

    todoList.push(todoItem);
    displayTodos();
}

function displayTodos() {
    const todoBody = document.getElementById('todo-body');
    todoBody.innerHTML = '';

    if (todoList.length === 0) {
        todoBody.innerHTML = `<tr><td colspan="4" class="no-task">No task found</td></tr>`;
        return;
    }

    todoList.forEach((item, index) => {
        const row = document.createElement('tr');

        // TASK
        const taskCell = document.createElement('td');
        taskCell.textContent = item.task;
        row.appendChild(taskCell);

        // DUE DATE
        const dateCell = document.createElement('td');
        dateCell.textContent = item.date;
        row.appendChild(dateCell);

        // STATUS
        const statusCell = document.createElement('td');
        statusCell.textContent = item.status;
        row.appendChild(statusCell);

        // ACTIONS
        const actionsCell = document.createElement('td');

        // Mark as Done button
        const doneBtn = document.createElement('button');
        doneBtn.textContent = 'Done';
        doneBtn.className = 'bg-green-500 text-white px-2 py-1 rounded mr-2';
        doneBtn.onclick = () => {
            todoList[index].status = 'Done';
            displayTodos();
        };
        actionsCell.appendChild(doneBtn);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'bg-red-500 text-white px-2 py-1 rounded';
        deleteBtn.onclick = () => {
            todoList.splice(index, 1);
            displayTodos();
        };
        actionsCell.appendChild(deleteBtn);

        row.appendChild(actionsCell);

        todoBody.appendChild(row);
    });
}

function clearTodos() {
    todoList = [];
    displayTodos();
}



        todoBody.appendChild(row);
    });
}


