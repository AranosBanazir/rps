// Vars we need
//humanScore, computerScore
//array of r, p, s

    let playerChoice = "p"
    let computerChoice = "p"
    const choiceConvert = {
        r: "Rock",
        s: "Scissors",
        p: "Paper",
    }

    function playerOption(arg){

        playerChoice = arg.toLowerCase()
        alert(`You chose  ${choiceConvert[playerChoice]}`)
        playGame();
    }



const scores = {
    human: 0,
    computer: 0,
}

let results = {
    wins: 0,
    loses: 0,
    rounds: 0,
    maxRounds: 0,
}


function resetGame(){
    let result = Object.keys(results)
    for(const i of result ){
        i = 0;
        console.log(i)
    }
}



function checkScores(){
    if  (results.rounds === results.maxRounds) {
        if (scores.human > scores.computer) {
           if (confirm("YOU HAVE WON THE GAME! Play again?")){
            //TODO : RESET VALUES AND PLAY AGAIN
            // resetGame() 
           }
        }
}
}

function playGame(){
//  const playerChoice = prompt("Type R for Rock, P for Paper or S for Scissors")
 const choices = ["r", "p", "s"]

  computerChoice = choices[Math.floor(Math.random() * choices.length)]
 
    function win(){
        if ((playerChoice.toLowerCase() === "r" && computerChoice === "s") || (playerChoice.toLowerCase === "s" && computerChoice === "p") || (playerChoice.toLowerCase == "p" && computerChoice === "r") ){
            return "won";
        }else if(playerChoice.toLowerCase() === computerChoice){
            return "tied"
        }else{
            return "lost";
        }

    }
    displayChoices()
    if (win() === "won"){
        alert(`You chose ${choiceConvert[playerChoice]} and beat the computer who chose ${choiceConvert[computerChoice]}`)
    }else if (win() === "lost") {
        alert(`You chose ${choiceConvert[playerChoice]} and lost to the computer who chose ${choiceConvert[computerChoice]}`)
    }else if (win() === "tied"){
        alert(`You chose ${choiceConvert[playerChoice]} and tied with the computer!`)
    }


}

function displayChoices(){
    document.getElementById('p1-img-choice').src = `./assets/images/${choiceConvert[playerChoice].toLowerCase()}.png`;
    document.getElementById('p1-img-choice').style.display = "block"


    document.getElementById('p2-img-choice').src = `./assets/images/${choiceConvert[computerChoice].toLowerCase()}.png`;
    document.getElementById('p2-img-choice').style.display = "block"

}