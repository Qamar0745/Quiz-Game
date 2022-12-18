var readline = require("readline-sync");
var userAns = readline.question("What is your name: ");
console.log("Welcome, " + userAns + " Do you know Qamar?");

var score = 0;


function play(question, answer){
  var ans = readline.question(question + " : ");
  if(ans === answer){
    score++;
    console.log("Right!!");
  }
  else{
    console.log("Wrong");
  }

  console.log("--------");
}


// play("Where does he live?", "Balrampur");
// play("What are his hobbies?", "Badminton");


var questions = [
  {ques: "Where does he live?",
   anss: "Lucknow"},
  
  {ques: "What are his hobbies?",
   anss: "Badminton"}
]

for(var i = 0; i < questions.length; i++){
  var currentQues = questions[i];
  play(currentQues.ques, currentQues.anss);
}

console.log("Your score is: "+ score);





