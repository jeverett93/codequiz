var quizContent = document.getElementById("question-content");
var questions = [
    {
        question: "Who invented the dab?",
        potential_answers: ["Migos","THE DAB CORP.", "Rosa Parks", "MC Hammer"],
        correct_answer: "Migos"
    },

    {
        question: "What exactly was on fleek in its first known use?",
        potential_answers: [
            {
                0: "an outfit"
            },
            {
                1: "makeup"
            },
            {
                2: "eyebrows"
            },
            {
                3: "box braids"
            },
        ],
        correct_answer: "eyebrows"
    },
]




var currentQuestion = questions[0].question;
var correctAnswer = questions[0].correct_answer;
var userAnswer;



for (var i = 0; i < questions[0].potential_answers.length; i++) {
    
   var newH = document.createElement("h1");

    var newP = document.createElement("p");

   var btn = document.createElement("button");


   newH.innerText = currentQuestion;

   
//    Have each button be a choice in the array
   btn.innerText = questions[0].potential_answers[i];

   // give data attributes to question choices
     btn.setAttribute("data-index", i);


    // add event listener that, when clicked, calls on function that reveals whether or not answer is correct.
    //  btn.addEventListener("click", seeResults);

    
     newP.appendChild(btn);

     newH.appendChild(newP);

     quizContent.append(newH);
}


// Function that tells user whether or not the answer is correct
function seeResults() {

    // when called by whichever button choice is selected, get the data index attribute of the button
    var selected = btn.getAttribute("data-index");

    // if answer is Migos, alert or return correct

    
    // if answer is anything other than Migos, alert or return wrong


   
};

console.log(seeResults())



