let addbtn = document.getElementById("addtask");
let modal = document.getElementById("popup");
let sidebar = document.getElementById("sidebar");
let barbtn = document.getElementById("barbtn");
let deditbtn = document.getElementById("");
let dcancelbtn = document.getElementById("");
let ddeletebtn = document.getElementById("");

sidebar.style.left = "-500px";
addbtn.addEventListener("click", function(){
    modal.style.display = "flex";
})
barbtn.addEventListener("click", function(){
    if(sidebar.style.left === "-500px"){
        sidebar.style.left = 0 ;
        addbtn.disabled = true;
    }else{
        sidebar.style.left = "-500px";
        addbtn.disabled = false;
    }
})
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Select the parent container
const dataContainer = document.getElementById("datacontainer");

// Create a new 'cards' div
const newCards = document.createElement("div");
newCards.className = "cards";

// Add content to the new 'cards'
newCards.innerHTML = `
  <div class="taskcard">
    <div class="title" style="display: flex; justify-content: space-between">
      <h3 class="taskinfo">New Task Title</h3>
      <div style="display:flex">
        <h3>Date:</h3>
        <h3 class="taskinfo">New Date</h3>
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;">
      <p class="taskinfo">New task details</p>
      <div style="display:flex">
        <h3>Status:</h3>
        <h3 class="taskinfo">New Status</h3>
      </div>
    </div>
  </div>
`;

// Append the new 'cards' div to the 'datacontainer'
dataContainer.appendChild(newCards);


// Select all task cards and the popup elements
const taskCards = document.querySelectorAll('.taskcard');
const popup = document.querySelector('.infopopup');
const titleElement = document.querySelector('#title + p');
const descriptionElement = document.querySelector('#details + p');
const dateElement = document.querySelector('#data + p');
const statusElement = document.querySelector('#status + p');
const cancelButton = document.querySelector('#cancel');

// Add event listeners to task cards
taskCards.forEach(card => {
  card.addEventListener('click', () => {
    // Extract data from the clicked task card
    const title = card.querySelector('.title .taskinfo').textContent;
    const description = card.querySelector('p.taskinfo').textContent;
    const date = card.querySelector('.title h3:nth-child(2)').textContent;
    const status = card.querySelector('div:last-child h3:nth-child(2)').textContent;

    // Set the popup data
    titleElement.textContent = title;
    descriptionElement.textContent = description;
    dateElement.textContent = date;
    statusElement.textContent = status;

    // Show the popup
    popup.style.display = 'block';
  });
});

// Add event listener to cancel button
cancelButton.addEventListener('click', () => {
  // Hide the popup
  popup.style.display = 'none';
});
