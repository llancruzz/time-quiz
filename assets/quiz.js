// Get quiz elements
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const question = document.getElementById("question");
const progressBar = document.getElementById("progress-bar");


// Get option count
let countOptionA = 0;
let countOptionB = 0;
let countOptionC = 0;
let countOptionD = 0;

// Get all the answer finished
let runningQuestion = 0;



// Questions and answers
const quizQuestions = [
    {
        question: "How would you describe your pace of life?",
        optionA: "A - I'm easy-going. I just take life as it comes.",
        optionB: "B - Quite fast, but I leave enough time for relaxation.",
        optionC: "C - At times frantic, at times relaxed.",
        optionD: "D - Non-stop the whole time, but I like it that way."

    },
    {
        question: "How do you tackle all the things you have to do each day?",
        optionA: "A - I do those things I feel like doing.",
        optionB: "B - I prioritise. I do the important things and put off all the rest.",
        optionC: "C - There is either not enough time to do everything or too much time with nothing to do. I find this difficult.",
        optionD: "D - I have a daily 'to do' list that I tick off after each item is completed."
    },
    {
        question: "How many things have you begun and not finished in the last few years?",
        optionA: "A - Plenty of things. I begin with a great deal of enthusiasm, but then I get bored.",
        optionB: "B - Hardly any, just one or two minor things.",
        optionC: "C - Several things. Sometimes I get distracted and move from one thing to another.",
        optionD: "D - None. There are no uncompleted projects in my life. I see each of my projects before I start the next."
    },
    {
        question: "When do you switch off your mobile phone?",
        optionA: "A - Unlike most people these days, my problem is forgetting to switch it on!",
        optionB: "B - In some public places and when I need some peace and quiet.",
        optionC: "C - Not as often as I should.",
        optionD: "D - Only if I have to."
    },
    {
        question: "What is your attitude to punctuality?",
        optionA: "A - I don't waste time worrying about it.",
        optionB: "B - Being late is impolite and inefficient, so I try to be punctual.",
        optionC: "C - I like to be on time in theory, but in practice, I'm often late.",
        optionD: "D - I'm always on time. I have no patience with people who are late."
    },
    {
        question: "How do you spend your leisure time?",
        optionA: "A - Doing a bit of this and that. I don't know where the time goes.",
        optionB: "B - I recharge my batteries with a few hobbies and being with friends.",
        optionC: "C - I keep trying different things that people suggest, but nothing grabs me.",
        optionD: "D - I have few hobbies and little leisure time. I try to put the whole of my life to good use."
    },
    {
        question: "How do you keep in touch with friends?",
        optionA: "A - I wait for them to get in touch with me.",
        optionB: "B - In several ways - emails, Facebook, WhatsApp, and texting, but also I like to phone them for a proper chat.",
        optionC: "C - In any way I can - but it can be difficult. I think 'I must contact X', but time passes and I find I haven't.",
        optionD: "D - Most of the time I text. It's quick and efficient. "
    },
    {
        question: "Which of these is closest to your philosophy on life?",
        optionA: "A - Whatever will be will be.",
        optionB: "B - Life is not a dress rehearsal.",
        optionC: "C - There is a reason for everything.",
        optionD: "D - Grasp every moment."
    }
];



// Declare Function
document.addEventListener("DOMContentLoaded", function() {
    startQuiz();
});


function startQuiz() {
    getQuestions();
}


function getResult() {
    if  (countOptionA === countOptionB && countOptionB === countOptionC && countOptionC === countOptionD) {
        localStorage.setItem("highestOptionSelected", undefined);
        localStorage.setItem("isResultEqual", true);
        window.location="result.html";     
    } else {
        const answeredOptions = {countOptionA, countOptionB, countOptionC, countOptionD},
        highest = Object.values(answeredOptions).sort().pop();
        highestOption = Object.keys(answeredOptions).find( option => answeredOptions[option] === highest);
        localStorage.setItem("highestOptionSelected", highestOption);
        localStorage.setItem("isResultEqual", false);
        window.location="result.html";
    }
    
}



function getQuestions() {
    const questions = quizQuestions[runningQuestion]; 
    question.innerHTML = "<h1 id='questions'><strong>" + questions.question + "</strong></h1>"
    optionA.innerHTML = "<p class= 'option' id='A'>" + questions.optionA + "</p>";
    optionB.innerHTML = "<p class= 'option' id='B'>" + questions.optionB + "</p>";
    optionC.innerHTML = "<p class= 'option' id='C'>" + questions.optionC + "</p>";
    optionD.innerHTML = "<p class= 'option' id='D'>" + questions.optionD + "</p>";
}


function checkAnswer(option) {
    runningQuestion++;
    if (option === 'A') {
        countOptionA++;
    } else if (option === 'B') {
        countOptionB++;
    } else if (option === 'C') {
        countOptionC++;
    } else {
        countOptionD++;
    } 
    //Check if all question are finished
    if (runningQuestion <= 7) {
    //continue to next question if is not finished
        getQuestions();
    } else {
        getResult();
    }
  
   
}

// Light theme and Dark theme 
let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');

    if(themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active')
    }
};



