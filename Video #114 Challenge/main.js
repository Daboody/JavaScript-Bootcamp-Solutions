let inputField = document.querySelector(".input");
let addTask = document.querySelector(".add");
let tasksArea = document.querySelector(".tasks");


addTask.addEventListener("click", function(){
    if (inputField.value.length > 0){
        // If The Input Field Is Not Empty

        // Create Container For The Task And The Button
        let taskContainer = document.createElement("div");
        taskContainer.classList = "task-container";

        // Create Element With Task Name
        let theTask = document.createElement("div");
        theTask.classList = "the-task";
        theTask.innerHTML = inputField.value;
        taskContainer.appendChild(theTask);
        tasksArea.appendChild(taskContainer);

        // Create Delete Button For Remove Task
        let deleteButton = document.createElement("button");
        deleteButton.classList = "delete-element";
        deleteButton.innerHTML = "X";
        theTask.after(deleteButton);
        
        
        // Remove Task onClick
        deleteButton.addEventListener("click", function(){
            deleteButton.parentElement.remove();
        });
    
        inputField.value = "";
    }

    });
    // window.localStorage.clear();