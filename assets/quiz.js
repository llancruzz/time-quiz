// Get elements
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const questions = document.getElementById("questionsQuiz");
const progressBar = document.getElementById("progress-bar");


// Questions and answers
let questionsQuiz = [
    {
        question: "How would you describe your pace of life?",
        optionA: "I'm easy-going. I just take life as it comes.",
        optionB: "Quite fast, but I leave enough time for relaxation.",
        optionC: "At times frantic, at times relaxed.",
        optionD: " Non-stop the whole time, but I like it that way."

    },
    {
        question: "How do you tackle all the things you have to do each day?",
        optionA: "I do those things I feel like doing.",
        optionB: "I prioritise. I do the important things and put off all the rest.",
        optionC: "There is either not enough time to do everything or too much time with nothing to do. I find this difficult.",
        optionD: "I have a daily 'to do' list that I tick off after each item is completed."
    },
    {
        question: "How many things have you begun and not finished in the last few years?",
        optionA: "Plenty of things. I begin with a great deal of enthusiasm, but then I get bored.",
        optionB: "Hardly any, just one or two minor things.",
        optionC: "Several things. Sometimes I get distracted and move from one thing to another.",
        optionD: "None. There are no uncompleted projects in my life. I see each of my projects before I start the next."
    },
    {
        question: "When do you switch off your mobile phone?",
        optionA: "Unlike most people these days, my problem is forgetting to switch it on!",
        optionB: "In some public places and when I need some peace and quiet.",
        optionC: "Not as often as I should.",
        optionD: "Only if I have to."
    },
    {
        question: "What is your attitude to punctuality?",
        optionA: "I don't waste time worrying about it.",
        optionB: "Being late is impolite and inefficient, so I try to be punctual.",
        optionC: "I like to be on time in theory, but in practice, I'm often late.",
        optionD: "I'm always on time. I have no patience with people who are late."
    },
    {
        question: "How do you spend your leisure time?",
        optionA: "Doing a bit of this and that. I don't know where the time goes.",
        optionB: "I recharge my batteries with a few hobbies and being with friends.",
        optionC: "I keep trying different things that people suggest, but nothing grabs me.",
        optionD: "I have few hobbies and little leisure time. I try to put the whole of my life to good use."
    },
    {
        question: "How do you keep in touch with friends?",
        optionA: "I wait for them to get in touch with me.",
        optionB: "In several ways - emails, Facebook, WhatsApp, and texting, but also I like to phone them for a proper chat.",
        optionC: "In any way I can - but it can be difficult. I think 'I must contact X', but time passes and I find I haven't.",
        optionD: "Most of the time I text. It's quick and efficient. "
    },
    {
        question: "Which of these is closest to your philosophy on life?",
        optionA: "Whatever will be will be.",
        optionB: "Life is not a dress rehearsal.",
        optionC: "There is a reason for everything.",
        optionD: "Grasp every moment."
    }
];


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

