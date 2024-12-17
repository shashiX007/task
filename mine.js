let addbtn = document.getElementById("addtask");
let modal = document.getElementById("popup");
let sidebar = document.getElementById("sidebar");
let barbtn = document.getElementById("barbtn");

// Sidebar toggle
sidebar.style.left = "-500px";
addbtn.addEventListener("click", function () {
  modal.style.display = "flex";
  modal.classList.add("fade-in");
});
barbtn.addEventListener("click", function () {
  if (sidebar.style.left === "-500px") {
    sidebar.style.left = "0";
    addbtn.disabled = true;
  } else {
    sidebar.style.left = "-500px";
    addbtn.disabled = false;
  }
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("fade-in");
    modal.style.display = "none";
  }
});

// Adding new tasks
let taskform = document.getElementById("tasksbmtform");
taskform.addEventListener("submit", function (event) {
  event.preventDefault();
  const newtitle = document.getElementById("title").value;
  const newtask = document.getElementById("task").value;
  const newdate = document.getElementById("date").value;

  modal.classList.remove("fade-in");
  modal.style.display = "none";

  const dataContainer = document.getElementById("datacontainer");

  // Create a new 'cards' div
  const newCards = document.createElement("div");
  newCards.className = "cards";

  // Add content to the new 'cards'
  newCards.innerHTML = `
    <div class="taskcard">
      <div class="title" style="display: flex; justify-content: space-between">
        <h3 class="taskinfo">${newtitle}</h3>
        <div style="display:flex">
          <h3>Date:</h3>
          <h3 class="taskinfo">${newdate}</h3>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;">
        <p class="taskinfo">${newtask}</p>
        <div style="display:flex">
          <h3>Status:</h3>
          <h3 class="taskinfo">New Status</h3>
        </div>
      </div>
    </div>
  `;

  // Append the new 'cards' div to the 'datacontainer'
  dataContainer.appendChild(newCards);
  taskform.reset();
  // Attach event listener to the new task card
  attachCardEventListeners(newCards.querySelector('.taskcard'));
});

// Function to attach event listeners to task cards
function attachCardEventListeners(card) {
  card.addEventListener("click", () => {
    const title = card.querySelector(".title .taskinfo").textContent;
    const description = card.querySelector("p.taskinfo").textContent;
    const date = card.querySelector(".title h3:nth-child(2)").textContent;
    const status = card.querySelector("div:last-child h3:nth-child(2)").textContent;

    const popup = document.querySelector(".infopopup");
    const titleElement = document.querySelector("#title + p");
    const descriptionElement = document.querySelector("#details + p");
    const dateElement = document.querySelector("#data + p");
    const statusElement = document.querySelector("#status + p");

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    dateElement.textContent = date;
    statusElement.textContent = status;

    popup.style.display = "block";
    popup.classList.add("fade-in");
  });
}

// Cancel and delete popup actions
const cancelButton = document.querySelector("#cancel");
const deleteButton = document.querySelector("#delete");
cancelButton.addEventListener("click", () => {
  const popup = document.querySelector(".infopopup");
  popup.classList.remove("fade-in");
  popup.style.display = "none";
});

//delete button giving functionality //
deleteButton.addEventListener("click", function () {
  const popup = document.querySelector(".infopopup");
  let confirmation = confirm("Are you sure you want to delete the task !");
  if (confirmation){
    popup.style.display = "none";
  };
  

  // Remove the corresponding task card
  const taskCard = document.querySelector(".taskcard");
  if (taskCard) taskCard.remove();
});
