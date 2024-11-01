const showModalButton = document.getElementById("showModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const addTaskButton = document.getElementById("addTaskButton");
const modal = document.getElementById("modal");
const todoList = document.getElementById("todoList");

// Ouvrir la modale
showModalButton.onclick = function() {
  modal.classList.remove("hidden");
};

// Fermer la modale
closeModalButton.onclick = function() {
  modal.classList.add("hidden");
};

// Ajouter une tâche
addTaskButton.onclick = function() {
  // Récupérer les valeurs des champs
  const title = document.getElementById("taskTitle").value;
  const date = document.getElementById("taskDate").value;

  // Vérifier que les champs ne sont pas vides
  if (title && date) {
    // Créer un nouvel élément de liste
    const taskItem = document.createElement("li");
    taskItem.textContent = `${title} - ${date}`;

    // Ajouter la tâche à la liste
    todoList.appendChild(taskItem);

    // Réinitialiser les champs
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDate").value = "";

    // Fermer la modale
    modal.classList.add("hidden");
  } else {
    alert("Veuillez remplir tous les champs.");
  }
};
