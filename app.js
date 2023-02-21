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

document.getElementById("add").addEventListener("click", add);
document.getElementById("rest").addEventListener("click", rest);

// Chess Table
function makeChessTable() {
  const size = 8;
  var space = document.getElementById("table");

  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      let div = document.createElement("div");
      let isEvenRow = i % 2 == 0;
      let isEvenColumn = j % 2 == 0;
      let isBlack = isEvenRow ? !isEvenColumn : isEvenColumn;
      div.className = isBlack ? "black" : "white";
      space.appendChild(div);
    }
  }
}

document
  .getElementById("makeChessTable")
  .addEventListener("click", makeChessTable);

// Timer
function startTimer() {
  var pomodoro = document.getElementById("timer");
  var secondsLeft = Number(pomodoro.textContent);

  var intervalId = setInterval(() => {
    secondsLeft--;
    pomodoro.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(intervalId);
      var audio = new Audio("ringtone.mp3");
      audio.play();
    }
  }, 1000);
}

document.getElementById("start-timer").addEventListener("click", startTimer);
