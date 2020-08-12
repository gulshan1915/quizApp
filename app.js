const startButton= document.getElementById("start-btn")
const nextButton= document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
console.log("started")
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
   questionElement.innerText = question.question
   question.answers.forEach(answers => {
       const button = document.createElement("button")
       button.innerText = answers.text
       button.classList.add("btn")
       if (answers.correct){
           button.dataset.correct = answers.correct
       }
       button.addEventListener("click", selectAnswer)
       answerButtonsElement.appendChild(button)
   })
}

function resetState(){
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
    clearStatusClass(document.body)
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "what is 2 + 2?", 
        answers: [
            { text: "4", correct: true},
            { text: "22", correct: false},
            { text: "44", correct: false},
            { text: "8", correct: false},

        ]

    }
    ,
    {
        question: "what is 2 X 2?", 
        answers: [
            { text: "4", correct: true},
            { text: "29", correct: false},
            { text: "32", correct: false},
            { text: "72", correct: false},
    
        ]
    
    }
    ,
    {
        question: "what is 2 - 9?", 
        answers: [
            { text: "4", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: false},
            { text: "-7", correct: true},
    
        ]
    
    },

    {
        question: "what is 25 - 4?", 
        answers: [
            { text: "24", correct: false},
            { text: "27", correct: false},
            { text: "19", correct: false},
            { text: "21", correct: true},
    
        ]
    
    },

    {
        question: "what is 2 X  9?", 
        answers: [
            { text: "45", correct: false},
            { text: "7", correct: false},
            { text: "18", correct: true},
            { text: "-7", correct: false},
    
        ]
    
    }


]

