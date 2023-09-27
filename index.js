// //funciones constructorad
// //EM2015

// class Pet {
//     //metodo por defecto
//     constructor(name, dueno, edad){
//         this.dueno = dueno;
//         this.edad = edad;
//         this.name = name;
//     }
// }

// //crear instancia
// const james = new Pet("james","jose", "12")
// const david = new Pet("david","raul", "2")
// const ernesto = new Pet("ernesto","josefa", "5")

// console.log(james.edad);

const input = document.querySelector("#todo")
const addlist = document.querySelector("#add-list")
const todolist = document.querySelector("#todo-list")

const tasks = [];

class Task {
    constructor(name){
        this.name = name;
        this.completed = false;
    }
    toggleCompleted(){
        this.completed = !this.completed;
    }
}

function addTask(){
    const value = input.value.trim();
    if (!value) {
        alert("Porfavor llena el input");
        return;
    }
    const newTask = new Task(value);
    tasks.push(newTask);
    input.value = "";

    loadTask()
}

function loadTask() {
    todolist.innerHTML = "";
    tasks.map((task, index) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");

        li.textContent = task.name;
        checkbox.checked = task.completed

        checkbox.setAttribute("type", "checkbox");
        
        checkbox.addEventListener("change",() => active(index));

        if (task.completed) {
            li.classList.add("completed");
        }

        todolist.appendChild(li)
        todolist.appendChild(checkbox)
    });

}

function active(index) { 
    tasks[index].toggleCompleted();
    loadTask();
 }

addlist.addEventListener("click", addTask);
