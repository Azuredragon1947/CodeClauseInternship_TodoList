document.addEventListener("DOMContentLoaded", function () {
      const taskInput = document.getElementById("taskInput");
      const addTaskButton = document.getElementById("addTask");
      const taskList = document.getElementById("taskList");

      // Function to add a new task
      function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText !== "") {
                  const li = document.createElement("li");
                  li.innerHTML = `
                    <input type="checkbox" class="box-done">
                    <span>${taskText}</span>
                    <button class="delete-button">Delete</button>
                `;
                  taskList.appendChild(li);
                  taskInput.value = "";

                  // Add event listener to mark task as completed
                  li.firstElementChild.addEventListener("click", function () {
                        const a = li.childNodes[3];
                        a.classList.toggle("completed");
                  });

                  // Add event listener to delete task
                  const deleteButton = li.querySelector(".delete-button");
                  deleteButton.addEventListener("click", function () {
                        taskList.removeChild(li);
                  });
            }
      }

      // Event listener for adding a task
      addTaskButton.addEventListener("click", addTask);

      // Event listener for adding a task when Enter key is pressed
      taskInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                  addTask();
            }
      });
});
