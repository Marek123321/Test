function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function startGame() {
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerChoose = "kamień";
    } else if (randomNumber == 1) {
        computerChoose = "papier";
    } else {
        computerChoose = "nożyczki";
    }
    if ((computerChoose == "kamień" && varHumanChoose == "papier") || (computerChoose == "papier" && varHumanChoose == "nożyczki") || (computerChoose == "nożyczki" && varHumanChoose == "kamień")) {
        varResult = "wygrałeś";
    } else if (computerChoose == varHumanChoose) {
        varResult = "remis";
    } else {
        varResult = "przegrałeś";
    }
    printMessage(`Wybór komputera to ${computerChoose}, Twój wybór to ${varHumanChoose}. ${varResult}.`);
}


let computerChoose = "";
let varHumanChoose = "";
let varResult = "";


function humanChoosePaper() {
    varHumanChoose = "papier";
    startGame();
}

function humanChooseRock() {
    varHumanChoose = "kamień";
    startGame();
}

function humanChooseScissors() {
    varHumanChoose = "nożyczki";
    startGame();
}

document.getElementById('paper').addEventListener('click', humanChoosePaper)
document.getElementById('rock').addEventListener('click', humanChooseRock)
document.getElementById('scissors').addEventListener('click', humanChooseScissors)