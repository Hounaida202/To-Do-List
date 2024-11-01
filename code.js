document.getElementById("submitTask").addEventListener("click", function() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    if (title && description) {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.className = "list-group-item";
        newTask.innerHTML = `<strong>${title}</strong>: ${description}`;
        
        taskList.appendChild(newTask);
        
        // Reset the modal inputs
        document.getElementById("taskTitle").value = '';
        document.getElementById("taskDescription").value = '';

        // Hide the modal
        $('#taskModal').modal('hide');
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});


