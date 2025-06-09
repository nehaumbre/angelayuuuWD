
function diceRoll() {
    var randomNumber = Math.random();
    var rolledValue = Math.floor(randomNumber * 6) + 1;
    return rolledValue;
}

function playerOneDiceRoll() {
    var player1Roll = diceRoll();
    document.querySelector(".img1").setAttribute("src", "images/dice" + player1Roll + ".png");
}

function playerTwoDiceRoll() {
    var player2Roll = diceRoll();
    document.querySelector(".img2").setAttribute("src", "images/dice" + player2Roll + ".png");
}

function rollUp() {
    playerOneDiceRoll();
    playerTwoDiceRoll();
}

function whoWins() {
    player1Data = document.querySelector(".img1").getAttribute("src");
    player2Data = document.querySelector(".img2").getAttribute("src");
    player1Score = parseInt(player1Data.match(/\d+/)[0], 10);
    player2Score = parseInt(player2Data.match(/\d+/)[0], 10);

    if (player1Score > player2Score) {
        document.querySelector("h1").innerText = "🏆Player 1 Wins";
    }
    else if (player1Score < player2Score) {
        document.querySelector("h1").innerText = "Player 2 Wins🏆";
    }
    else {
        document.querySelector("h1").innerText = "Its a Tie!💀 ";
    }
}

let play = document.querySelector("h1");

play.onclick = function () {
    rollUp();
    whoWins();
}

