function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskTime = document.getElementById("taskTime");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    taskInfo.innerHTML = `
        <strong>${taskInput.value}</strong><br>
        Date: ${taskDate.value || "N/A"} |
        Time: ${taskTime.value || "N/A"}
    `;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("complete-btn");

    completeBtn.onclick = function() {
        taskInfo.classList.toggle("completed");
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.onclick = function() {
        const newTask = prompt("Edit Task", taskInput.value);
        if(newTask){
            taskInfo.innerHTML = `
                <strong>${newTask}</strong><br>
                Date: ${taskDate.value || "N/A"} |
                Time: ${taskTime.value || "N/A"}
            `;
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.onclick = function() {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actions);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}
