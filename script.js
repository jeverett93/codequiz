var score = 0;
var highscore = localStorage.getItem("highscores");
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);
var quizContainer = document.getElementById("quiz-container");
// var newP = document.createElement("p");
// quizContainer.appendChild(newP);
var questionNum = 0;
var timer;
var quizTime = 60;
var timerEl = document.getElementById("timeClock");
var scoreKeep = [];

var questions = [
    {
        question: "Who invented the dab?",
        potential_answers: ["Migos","THE DAB CORP.", "Rosa Parks", "MC Hammer"],
        correct_answer: "Migos"
    },

    {
        question: "What exactly was on fleek in its first known use?",
        potential_answers: ["an outfit", "makeup", "eyebrows", "box braids"],
        correct_answer: "eyebrows"
    },
]


function startQuiz() {

  //render first question
  renderQuestion()
  startTimer()
}

function startTimer() {
  timer = setInterval(()=>{
    quizTime --
    timerEl.innerText = quizTime
  },1000)
}

function renderQuestion() {
  // make a button for each answer
  var buttons = questions[questionNum].potential_answers.map(function (answer) {
    return `<button onclick="answerQuestion('${answer}')" >${answer}</button>`
  })

  quizContainer.innerHTML = `
    <h1>${questions[questionNum].question}</h1>
    ${buttons.join("")}
  `
}

function answerQuestion(answer) {
  if (answer === questions[questionNum].correct_answer) {
    score ++;
    alert("Correct!");
  } else {
    // score --
    quizTime -= 10;
    alert("Incorrect!");
  }

//   quizContainer.appendChild(newP);
//   console.log(newP)


  questionNum ++;
  console.log(questionNum)
  console.log(score)
  if (questionNum === questions.length) {
    endQuiz()
  } else {
    renderQuestion()
  }
}

function endQuiz() {
    // create input element and button
    // Tells user what they're score is and allows them to input their initials.

    var inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    // var newBtn = document.createElement("button");
    // // inputName.innerText = "Input Initials"
    // newBtn.innerText = "Submit"

    // inputName.appendChild(newBtn);
    quizContainer.innerHTML = "";
    quizContainer.appendChild(inputName);


    console.log(inputName)

    localStorage.setItem("highscores", score);
    scoreKeep.push(score)
  
    console.log(scoreKeep)
    console.log(localStorage)
    
  // quizContainer.innerHTML = `
  //   Your score is ${score}
  // `
  clearInterval(timer)


    //add button that restarts quiz 
  // add input and button and have button save highscore with the following logic
  // get the highScores from localStorage
  // ensure that there was a value in localStorage
  // use JSON.parse to get existing object if available
  // create empty object if not
  // add user score info to object
  // JSON.stringify the object and save it to localStorage
}



