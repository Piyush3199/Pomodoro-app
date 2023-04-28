// Set the time limit in minutes
const timeLimit = 25;

// Calculate the end time
let endTime = new Date().getTime() + timeLimit * 60 * 1000;

// Get the timer element from the HTML
const timer = document.querySelector(".timer");

// Get the start, pause, and reset buttons from the HTML
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

// Initialize the countdown interval
let countdown;

// Define a function to update the countdown timer
function updateTimer() {
  // Calculate the remaining time
  const timeLeft = Math.round((endTime - new Date().getTime()) / 1000);

  // If the timer has finished, clear the countdown interval and display a message
  if (timeLeft < 0) {
    clearInterval(countdown);
    timerElement.innerHTML = "Time's up!";
    return;
  }

  // Convert the remaining time to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Display the remaining time in the timer element
  timer.innerHTML =  minutes+`:`+seconds;
}

// Add an event listener to the start button to begin the countdown
startButton.addEventListener("click", () => {
    clearInterval(countdown);
    endTime = new Date().getTime() + timeLimit * 60 * 1000;
    countdown = setInterval(updateTimer, 1000);
  });
  
  // Add an event listener to the pause button to stop the countdown
  pauseButton.addEventListener("click", () => {
    clearInterval(countdown);
  });
  
  // Add an event listener to the reset button to restart the countdown
  resetButton.addEventListener("click", () => {
    clearInterval(countdown);
    endTime = new Date().getTime() + timeLimit * 60 * 1000;
    timer.innerHTML = timeLimit+":"+"00";
  });

  // Task list

  // get references to the input and list elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// function to add a new task
function addTask() {
  // get the value of the input
  const newTask = taskInput.value;

  // create a new li element with the new task text and delete button
  const li = document.createElement("li");
  li.textContent = newTask;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  li.appendChild(deleteButton);

  // add the li element to the list
  taskList.appendChild(li);

  // add event listener to delete button
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  // clear the input field
  taskInput.value = "";
}
