console.log("It is working");

// Counter
function add() {
  var counter = document.getElementById("counter");
  var countNumber = Number(counter.textContent);
  counter.textContent = countNumber + 1;
}

function rest() {
  var counter = document.getElementById("counter");
  var countNumber = Number(counter.textContent);
  counter.textContent = countNumber - 1;
}

function reset() {
  var counter = document.getElementById("counter");
  counter.textContent = 0;
}

function random() {
  var max = 1200;
  var min = -1200;
  var rand = Math.floor(Math.random() * (max - min + 1) + min);
  var counter = document.getElementById("counter");
  counter.textContent = rand;
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("rest").addEventListener("click", rest);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("random").addEventListener("click", random);

// Chess Table
function makeChessTable() {
  const size = 8;
  var space = document.getElementById("table");

  var newSpace = document.createElement("div");
  newSpace.className = "table";
  space.appendChild(newSpace);

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      let div = document.createElement("div");
      let isEvenRow = i % 2 == 0;
      let isEvenColumn = j % 2 == 0;
      let isBlack = isEvenRow ? !isEvenColumn : isEvenColumn;
      div.className = isBlack ? "black" : "white";
      newSpace.appendChild(div);
    }
  }

  var chessProject = document.getElementById("chess-project");
  var btn = document.createElement("button");
  btn.textContent = "Remove table";
  btn.addEventListener("click", () => {
    newSpace.remove();
    btn.remove();
  });
  chessProject.appendChild(btn);
}

document
  .getElementById("makeChessTable")
  .addEventListener("click", makeChessTable);

// Pomodoro
function startTimer() {
  var pomodoro = document.getElementById("timer");
  var secondsLeft = Number(pomodoro.value);

  if (secondsLeft <= 0) {
    clearInterval(intervalId);
    alert("The counter cannot start at 0 or negative numbers");
    pomodoro.value = "";
    return;
  }

  var intervalId = setInterval(() => {
    secondsLeft--;
    pomodoro.value = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(intervalId);
      var audio = new Audio("ringtone.mp3");
      audio.play();
    }
  }, 1000);
}

function startDefaultTimer(time) {
  let minutes = Number(time.split(":")[0]);
  let seconds = Number(time.split(":")[1]);
  const format60 = 60;
  const btn = document.querySelector(`[id='${minutes}']`);
  btn.textContent = time;

  const intervalId = setInterval(() => {
    const timeString = `${minutes.toString().padStart(2, "0")}
      :${seconds.toString().padStart(2, "0")}`;
    btn.textContent = timeString;
    seconds--;
    if (seconds < 0) {
      minutes--;
      seconds = format60 - 1;
    }
    if (minutes < 0) {
      clearInterval(intervalId);
      const audio = new Audio("ringtone.mp3");
      audio.play();
    }
  }, 1000);
}

document.getElementById("start-timer").addEventListener("click", startTimer);

// Todo list
function addTodo() {
  var todoTitle = document.getElementById("task");
  var todos = document.getElementById("todos");
  var todoContainer = document.createElement("div"); // wrap todo and button in a container
  todoContainer.className = "todo-container";
  var todo = document.createElement("p");
  var button = document.createElement("button");

  button.textContent = "Done";
  button.setAttribute("aria-label", "Remove todo item"); // add aria-label for accessibility

  todo.textContent = todoTitle.value;
  todoContainer.appendChild(todo);
  todoContainer.appendChild(button);
  todos.appendChild(todoContainer);
  todoTitle.value = "";

  button.addEventListener("click", function () {
    // add event listener to the button
    todoContainer.remove();
  });
}

document.getElementById("add-todo").addEventListener("click", addTodo);
