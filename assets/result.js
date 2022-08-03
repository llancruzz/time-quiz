//Get result elements
const resultA = document.getElementById("resultA");
const resultB = document.getElementById("resultB");
const resultC = document.getElementById("resultC");
const resultD = document.getElementById("resultD");


// Results
const results = 
   {
    A: "You're a daydreamer. Did you actually manage to finish the quiz? You have a little control over your life. Chaos surrounds you. Perhaps you tell yourself that you are being creative, but the truth is you are frightened of failure, so you don't cry. Your abilities remain untested and your dreams unfulfilled.",
    B: "You represent balance and common sense. Your ability to manage your life is impressive, and you know when to relax. You understand that the best decisions are never made in an atmosphere of pressure. You can meet deadlines and look ahead to make sure crises don't happen.",
    C: "You live in hope that something or somebody will make everything in life come right for you.\"I'll get round to it\", you tell yourself. What you don't tell yourself is that you alone can manage your life. You are an expert in putting things off till later and finding excuses when you do so. Forget these excuses. The right time is now.",
    D: "You are certainly an achiever. Superman or superwoman. You know how to get a job done and you are proud of the way you manage your life. You are obsessive about using every second of the day to your best effect and get irritated by people who are not like you and prefer to take life at a slower pace. Learn to relax a little. Remember, stress kills.",
   };

// Wait for the DOM to finish loading before running the results
document.addEventListener("DOMContentLoaded", function() {
    "use strict";
    showResult();
});

// Display correct highest or equal result
function showResult() {
    "use strict";
    // Check first hight option and second hight option
    const firstHighestOption = localStorage.getItem("firstHighestOption");
    const secondHighestOption = localStorage.getItem("secondHighestOption");

    // Store div id
    const firstOption = "result"+firstHighestOption.charAt(firstHighestOption.length - 1);  //set it to same id name resultA or resultB ... etc
    
    
    // Cheking conditions
    if (localStorage.getItem("isAllOptionsEqual") === 'true'){
        document.getElementById("resultA").style.display = "block";
        document.getElementById("resultB").style.display = "block";
        document.getElementById("resultC").style.display = "block";
        document.getElementById("resultD").style.display = "block";
        // Display all of them if is true
        resultA.innerHTML = "<p class= 'option' id='A'>" + results.A + "</p>";
        resultB.innerHTML = "<p class= 'option' id='B'>" + results.B + "</p>";
        resultC.innerHTML = "<p class= 'option' id='C'>" + results.C + "</p>";
        resultD.innerHTML = "<p class= 'option' id='D'>" + results.D + "</p>";
    } else if (firstHighestOption && secondHighestOption) {
        const secondOption = "result"+secondHighestOption.charAt(secondHighestOption.length - 1); 

        document.getElementById(firstOption).style.display = "block";
        document.getElementById(secondOption).style.display = "block";

        if (firstOption === "resultA") {
            resultA.innerHTML = "<p class= 'option' id='A'>" + results.A + "</p>";
        } else  if (firstOption === "resultB") {
            resultB.innerHTML = "<p class= 'option' id='B'>" + results.B + "</p>";
        } else  if (firstOption === "resultC") {
            resultC.innerHTML = "<p class= 'option' id='C'>" + results.C + "</p>";
        } else {
            resultD.innerHTML = "<p class= 'option' id='D'>" + results.D + "</p>";
        }

        if (secondOption === "resultA") {
            resultA.innerHTML = "<p class= 'option' id='A'>" + results.A + "</p>";
        } else  if (secondOption === "resultB") {
            resultB.innerHTML = "<p class= 'option' id='B'>" + results.B + "</p>";
        } else  if (secondOption === "resultC") {
            resultC.innerHTML = "<p class= 'option' id='C'>" + results.C + "</p>";
        } else {
            resultD.innerHTML = "<p class= 'option' id='D'>" + results.D + "</p>";
        }

    } else {

        document.getElementById(firstOption).style.display = "block";
        // Only one result which has highest 
        if (firstOption === "resultA") {
            resultA.innerHTML = "<p class= 'option' id='A'>" + results.A + "</p>";
        } else  if (firstOption === "resultB") {
            resultB.innerHTML = "<p class= 'option' id='B'>" + results.B + "</p>";
        } else  if (firstOption === "resultC") {
            resultC.innerHTML = "<p class= 'option' id='C'>" + results.C + "</p>";
        } else {
            resultD.innerHTML = "<p class= 'option' id='D'>" + results.D + "</p>";
        }

    }

}

// Light theme and Dark theme 
let themeToggler = document.getElementById('theme-toggler');
    themeToggler.onclick = () => {
    "use strict";
    themeToggler.classList.toggle('fa-sun');

    if(themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
};


