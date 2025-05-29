const container= document.querySelector('.container');
const questionBox= document.querySelector('.question');
const choicesBox= document.querySelector('.choices');
const nextbtn= document.querySelector('.nextbtn');
const scoreBoard = document.querySelector('.scoreBoard');
const alert = document.querySelector('.alert');
const progressBar = document.querySelector('.progress-bar');

// Make an array of Object that have questions, choices and Answer
const quiz = [
    {
        question:"Q1.In which month is the longest day of the year in Earth’s northern hemisphere??",
        choices:["July", "August","June","May"],
        answer:"June"
    },
    {
        question:"Q2.What is the common, more popular name for an orca?",
        choices:["White shark", "Calf","Beluga","Killer Whale"],
        answer:"Killer Whale"
    },
    {
        question:"Q3.Which gas planet is the largest planet in the Solar System??",
        choices:["Jupiter", "Saturn","Uranus","Neptune"],
        answer:"Jupiter"
    },
    {
        question:"Q4.How many keys are there on a piano keyboard?",
        choices:["80", "100","88","62"],
        answer:"88"
    },
    {
        question:"Q5.In what year were the first Winter Olympics Games held?",
        choices:["1954", "1890","1924","1974"],
        answer:"1924"
    },
    {
        question:"Q6.Which sport has a so-called Greco-Roman variation?",
        choices:["Athletics", "Wrestling","Volleyball","Artistic gymnastics"],
        answer:"Wrestling"
    },
    {
        question:"Q7.Which of these countries have a flag that is different on either side?",
        choices:["Bahamas", "Costo Rica","Denmark","Paraguay"],
        answer:"Paraguay"
    }
];


let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;


function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / quiz.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

// Arrow Function to show QUESTION
const showQuestions = () =>{
    //console.log("QUESTIONS ARE DISPLAYED");
    const questionDetails = quiz[currentQuestionIndex]
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for(let i=0; i<questionDetails.choices.length; i++){
        currentChoice = questionDetails.choices[i]
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);
        choiceDiv.addEventListener('click', ()=>{
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');
                

            }
            
            else{
                choiceDiv.classList.add('selected');
            }

        });


    }
    //console.log(questionDetails);

}


const answerCheck = () => {
    const choiceSelected = document.querySelector('.choice.selected');
    if (choiceSelected.textContent === quiz[currentQuestionIndex].answer){
        //alert("Correct")
        alertDisplay("Your answer is Correct");
        score++;
    }
    else{
        //alert("Wrong")
        alertDisplay("Your answer is incorrect");
    }
    currentQuestionIndex++;
    updateProgressBar();
    if(currentQuestionIndex < quiz.length){
       
        showQuestions();
        
      }
      else{
          showScore();
          quizOver = true;
    
}
}
// Create Function to show Score

const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreBoard.textContent =`Your Score ${score} out of ${quiz.length}` ;
    alertDisplay("You have completed this Quiz")
    nextbtn.textContent = "Play Again"
}
// Function to show alert
const alertDisplay = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg ;
}
showQuestions();
nextbtn.addEventListener('click',()=>{
    const choiceSelected = document.querySelector('.choice.selected');
    if(!choiceSelected && nextbtn.textContent === "Next"){
        //alert("Select option");
        alertDisplay("Select your answer")
        return;
 }
 if (quizOver){
    nextbtn.textContent = "Next";
    scoreBoard.textContent = "";
    currentQuestionIndex = 0;
    updateProgressBar();
    showQuestions();
    quizOver = false;
    score= 0;
 }

    else{
        answerCheck();
    }
    
    
   

});


