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
      div.className = isBlack ? "black-square" : "white-square";
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

// Minimal Workout

const excercises = [
  {
    name: "planks",
    reps: 15,
  },
  {
    name: "frogs",
    reps: 20,
  },
  {
    name: "cocodriles",
    reps: 20,
  },
  {
    name: "diamonds",
    reps: 20,
  },
  {
    name: "diver",
    reps: 20,
  },
  {
    name: "push ups with jumps",
    reps: 20,
  },
  {
    name: "kickies",
    reps: 20,
  },
];
let currentExcercise = 0;
let counterSet = 0;
let setComplete = false;
let numberSets = 3;
let numberTimes = 2;
let start = false;
let counter = 0;

let clicks = 0;

const btn = document.getElementById("excercise");
const timerbtn = document.getElementById("workout-timer");

function resetWorkout() {
  start = false;
  btn.textContent = "Start Workout";
}

function startWorkout() {
  clicks++;
  if (!start) {
    clicks = 0;
    start = true;
    counter = 0;
    timerbtn.textContent = "";
    setInterval(() => {
      counter++;
    }, 1000);
  }
  console.log(clicks);
  if (clicks % 2 == 0 && clicks !== 0) {
    console.log("next excercise");
    currentExcercise++;
    clicks = 0;
  }
  if (currentExcercise >= excercises.length) {
    clicks = 0;
    currentExcercise = 0;
    btn.textContent = "finished";
    timerbtn.textContent = `${parseInt(counter / 60)
      .toString()
      .padStart(2, "0")}:${(counter % 60).toString().padStart(2, "0")}`;
    setTimeout(resetWorkout, 3000);
    return;
  }
  btn.textContent = `${excercises[currentExcercise].name} x ${excercises[currentExcercise].reps}`;
}
