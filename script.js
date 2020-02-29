var questions = document.getElementById("question-content");
var choices = ["Migos", "THE DAB CORP.", "Rosa Parks", "MC Hammer"];
// var correctAnswer = choices.indexOf();
var userAnswer = ""; 



questions.innerText = "Who invented the dab?";

for (var i = 0; i < choices.length; i++) {
    
   var newP = document.createElement("p");

   var btn = document.createElement("button");

   
//    Have each button be a choice in the array
   btn.innerText = choices[i];

   // give data attributes to question choices
     btn.setAttribute("data-index", i);

     console.log(newP);


    // add event listener that, when clicked, calls on function that reveals whether or not answer is correct.
     btn.addEventListener("click", seeResults())

    
     newP.appendChild(btn);

     questions.append(newP);
}


// Function that tells user whether or not the answer is correct
function seeResults() {
    var selected = btn.getAttribute("data-index");

    if(selected === choices.indexOf("Migos")) {
        alert("Correct! MLK and Aretha Franklin smile upon you")
    }

    else (selected !== choices.indexOf("Migos")); {
        alert("Wrong! Harriet Tubman weeps...")
    };

    console.log(seeResults())
}



