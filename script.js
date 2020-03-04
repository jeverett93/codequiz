// starts quiz when begin is clicked in HTML
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", startQuiz);
// allows me to populate quiz content dynamically
var quizContainer = document.getElementById("quiz-container");

// quiz timer
var timer;
var quizTime = 60;
var timerEl = document.getElementById("timeClock");

// score keeper
var score = 0;
const savedArray = JSON.parse(localStorage.getItem("highscores")) || [];


// defines quiz questions as an object to be called on later
var questionNum = 0;
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
    {
      question: "What movie does the phrase “Bye Felicia” come from?",
      potential_answers: ["Die Hard", "Big Mama's House", "Friday", "Barbershop"],
      correct_answer: "Friday"
     },
    {
    question: "When are you supposed to clap?",
    potential_answers: ["on the 1 and the 3", "when a plane lands", "after the fat lady sings", "on the 2 and the 4"],
    correct_answer: "on the 2 and the 4"
    },
    {
    question: "What did the five fingers say to the face?",
    potential_answers: ["Hi!", "Slap!", "You want a knuckle sandwich?", "You can't see me!"],
    correct_answer: "Slap!"
    },
]

// function that starts quiz which renders questions and starts timer
function startQuiz() {

  //render first question
  renderQuestion()
  startTimer()
}

// timer function
function startTimer() {
  timer = setInterval(()=>{
    quizTime --
    timerEl.innerText = quizTime

    // ends quiz if no time left
    if (quizTime <= 0) {
      endQuiz();
    };
  },1000)

  
}

// function for questions that makes each answer choice a button as well as making the questions a header
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

// function that increases user score as questions are answered correctly and takes time away if question answer is incorrect. 
function answerQuestion(answer) {
  if (answer === questions[questionNum].correct_answer) {
    score ++;
    alert("Correct! And Black Jesus smiled!");
  } else {
    quizTime -= 10;
    alert("Incorrect! My ancestors weep...");
  }


  // Makes sure each question continues to pop up dynamically.
  questionNum ++;
  console.log(questionNum)
  console.log(score)

  // triggers end quiz function if user completes quiz question or time runs out
  if (questionNum === questions.length) {
    endQuiz()
  } else {
    renderQuestion()
  }
}

// Tells user what they're score is and allows them to input their initials.
function endQuiz() {

    // create input element and button as well as heading for score to be placed into.
    var inputName = document.createElement("input");
    var newBtn = document.createElement("button");
    var newHead = document.createElement("h4");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Enter your initials please");
    inputName.setAttribute("id", "userInput");
    newBtn.innerText = "Submit";
    newHead.innerHTML = "Your score is " + score;

    newBtn.addEventListener("click", () => {
      // scoreKeep.push(score);
      var userNameVal = document.getElementById("userInput").value;
      // scoreKeep.push(userNameVal);

      savedArray.push("Name: " + userNameVal + "  Score: " + score);
      alert(userNameVal);
      highScores();
    });
    
    // puts this all on one page
    quizContainer.innerHTML = "";
    quizContainer.appendChild(newHead);
    quizContainer.appendChild(inputName);
    quizContainer.appendChild(newBtn);
    
    
  
    
    // stops timer when quiz ends
  clearInterval(timer)


}

// populates high score page
function highScores() {
  quizContainer.innerHTML = "";

  localStorage.setItem("highscores", JSON.stringify(savedArray));

  quizContainer.innerText = "High Scores: ";

  var scoreList = document.createElement('ul');
  quizContainer.appendChild(scoreList);

  for(var i=0; i < savedArray.length; i++) {
      var allTheScores = document.createElement('li');
      allTheScores.innerText = (savedArray[i]);
      scoreList.appendChild(allTheScores);
  }

  console.log(localStorage); 
  console.log(scoreKept);

}

  




