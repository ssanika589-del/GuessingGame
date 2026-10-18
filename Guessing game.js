let randomnum = Math.random() * 100;
let randomnumber = Math.ceil(randomnum);
console.log(randomnumber);
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

function checkGuess() {
    let userInput1 = parseInt(userInput.value);
    if (userInput1 === randomnumber) {
        gameResult.textContent = "Congratulation you won!!!";
        gameResult.style.backgroundColor = "green";
    } else if (userInput1 > randomnumber) {
        gameResult.textContent = "Too high !Try again!!!";
        gameResult.style.backgroundColor = "blue";
    } else if (userInput1 < randomnumber) {
        gameResult.textContent = "Too Low!! Try Again!!!";
        gameResult.style.backgroundColor = "Red";

    } else {
        gameResult.textContent = "Enter a valid input!!!";
        gameResult.style.backgroundColor = "Red";
    }
}