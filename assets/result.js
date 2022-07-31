
    //Get result elements
const resultA = document.getElementById("resultA");
const resultB = document.getElementById("resultB");
const resultC = document.getElementById("resultC");
const resultD = document.getElementById("resultD");
const resultHeader = document.getElementById("resultHeader");
const highResult = document.getElementById("highResult");

// Results
const results = [
   {
    resultA: "You're a daydreamer. Did you actually manage to finish the quiz? You have a little control over your life. Chaos surrounds you. Perhaps you tell yourself that you are being creative, but the truth is you are frightened of failure, so you don't cry. Your abilities remain untested and your dreams unfulfilled.",
    resultB: "You represent balance and common sense. Your ability to manage your life is impressive, and you know when to relax. You understand that the best decisions are never made in an atmosphere of pressure. You can meet deadlines and look ahead to make sure crises don't happen.",
    resultC: "You live in hope that something or somebody will make everything in life come right for you.\"I'll get round to it\", you tell yourself. What you don't tell yourself is that you alone can manage your life. You are an expert in putting things off till later and finding excuses when you do so. Forget these excuses. The right time is now.",
    resultD: "You are certainly an achiever. Superman or superwoman. You know how to get a job done and you are proud of the way you manage your life. You are obsessive about using every second of the day to your best effect and get irritated by people who are not like you and prefer to take life at a slower pace. Learn to relax a little. Remember, stress kills.",
   }
]

document.addEventListener("DOMContentLoaded", function() {
    showResult();
});

// Display correct highest or equal result
function showResult() {

    const highestOptionSelected = localStorage.getItem("highestOptionSelected") || undefined;
    const isResultEqual = localStorage.getItem("isResultEqual") || undefined;
console.log("hi result",highestOptionSelected)
    if (highestOptionSelected === 'undefined' && isResultEqual) {
        console.log("display aall 4")
        document.getElementById("highResult").style.display = "none";
        
        resultA.innerHTML = "<p class= 'option' id='A'>" + results[0].resultA + "</p>";
        resultB.innerHTML = "<p class= 'option' id='B'>" + results[0].resultB + "</p>";
        resultC.innerHTML = "<p class= 'option' id='C'>" + results[0].resultC + "</p>";
        resultD.innerHTML = "<p class= 'option' id='D'>" + results[0].resultD + "</p>";
    } else  {
        document.getElementById("display").style.display = "none";
        console.log("display aall 4 falseeeeee")
        
        if (highestOptionSelected === 'countOptionA' ) {
            highResult.innerHTML = "<p class= 'option' id='A'>" + results[0].resultA + "</p>";
        } else if (highestOptionSelected === 'countOptionB') {
            highResult.innerHTML = "<p class= 'option' id='B'>" + results[0].resultB + "</p>";
        } else if (highestOptionSelected === 'countOptionC') {
            highResult.innerHTML = "<p class= 'option' id='C'>" + results[0].resultC + "</p>";
        } else {
            highResult.innerHTML = "<p class= 'option' id='D'>" + results[0].resultD + "</p>";
        }
    }

}