var quizContent = document.getElementById("question-content");
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




var currentQuestion = questions[0].question;
var correctAnswer = questions[0].correct_answer;
var userAnswer;

var newH = document.createElement("h1")
newH.innerText = currentQuestion;
quizContent.append(newH);



for (var i = 0; i < questions[0].potential_answers.length; i++) {

    // var newP = document.createElement("p");

   var btn = document.createElement("button");

   
//    Have each button be a choice in the array
   btn.innerText = questions[0].potential_answers[i];

   // give data attributes to question choices
     btn.setAttribute("data-index", i);


    // add event listener that, when clicked, calls on function that reveals whether or not answer is correct.

    btn.addEventListener("click", seeResults);


    
    quizContent.append(btn);

    //  newH.appendChild(newP);

}

var count = localStorage.getItem("count");



// // Function that tells user whether or not the answer is correct
function seeResults(event) {

    // when called by whichever button choice is selected, get the data index attribute of the button
    // var selected = event.target.getAttribute("data-index");

    var selected = event.target.textContent;

    if(selected === correctAnswer){
        // return "Correct!"
        alert("Correct!")

    count++;
    // counter.textContent = count;

    localStorage.setItem("count", count);
    }
    else {
        // return "Incorrect!"
        alert("Incorrect!")

    count--;
    // counter.textContent = count;

    localStorage.setItem("count", count);
    }


    console.log(selected);
    console.log(correctAnswer)
    console.log(count)

    // if answer is Migos, alert or return correct

    
    // if answer is anything other than Migos, alert or return wrong


   
};

// function quizTimer() {
//     var timeLeft = 60;
//     var timerEl = document.getElementById("timer-element");
//     var timeInterval = setInterval(function() {
//       timerEl.textContent = timeLeft + " seconds remaining";
//       timeLeft--;
  
//       if (timeLeft === 0) {
//         timerEl.textContent = "";
//         clearInterval(timeInterval);
//       }
  
//     }, 1000);
//   }
// quizTimer();



