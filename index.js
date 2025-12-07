const info = document.getElementById("info");
const winner = document.getElementById("winner");
const reset = document.getElementById("reset");
const buttons = document.getElementsByClassName("case");
const X = document.getElementById("xScore");
const O = document.getElementById("oScore");

let count = 0;
let xScore = 0;
let oScore = 0;

updateScore();

//================ RESET ==================
reset.onclick = () => resetGame();

function resetGame() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
    }

    count = 0;
    winner.innerText = "";
    info.innerText = "player 1 should play";
    info.style.color = "#b9ddf8";
}

//================ CHECK WINNER =================
function checkWinner() {

    const wins = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for (let i = 0; i < wins.length; i++) {
        const [a,b,c] = wins[i];

        let v1 = buttons[a].innerText;
        let v2 = buttons[b].innerText;
        let v3 = buttons[c].innerText;

        if (v1 !== "" && v1 === v2 && v2 === v3) {
            v1 === "X" ? xWinner() : oWinner();
            return true;
        }
    }
    return false;
}

//================ WINNERS =================

function xWinner() {
    winner.innerText = "Player 1 wins!";
    info.innerText = "Game Over";
    xScore++;
    updateScore();
    count = 9;
}

function oWinner() {
    winner.innerText = "Player 2 wins!";
    info.innerText = "Game Over";
    oScore++;
    updateScore();
    count = 9;
}

//================ SCORE =================

function updateScore() {
    X.innerText = "Player 1 (X): " + xScore;
    O.innerText = "Player 2 (O): " + oScore;
}

//================ GAME =================

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {

        if (count === 9) return;
        if (buttons[i].innerText !== "") return;

        if (count % 2 === 0) {
            buttons[i].innerText = "X";
            info.innerText = "player 2 should play";
        } else {
            buttons[i].innerText = "O";
            info.innerText = "player 1 should play";
        }

        count++;

        if (!checkWinner() && count === 9) {
            winner.innerText = "Draw!";
            info.innerText = "Game Over";
            info.style.color = "red";
        }
    };
}
