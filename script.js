const newTaskInput = document.getElementById('inputTask');
const newTaskButton = document.querySelector('.addTask');
const taskList = document.getElementById('newTodo');
let i = 0;


function addTask() {
    let taskName = newTaskInput.value;

    if ((taskName!=="")&&(taskName!==null)&&(taskName!==undefined)) {
        ++i;
        let newTask = `<div id="${i}" draggable="true" class="todo-task">
                            <div class="task-name">${taskName}</div>
                            <div class="remove-task"><button onclick="removeTask(${i})" class="delete"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>`
        taskList.innerHTML += newTask;
        newTaskInput.value = "";
        newTaskInput.focus();
        
    }

}

function removeTask(id) {
    var task = document.getElementById(id);
    task.remove();
}

newTaskInput.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        newTaskButton.click();
        console.log('oi')
    }
})
