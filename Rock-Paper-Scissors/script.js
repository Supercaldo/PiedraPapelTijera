/*We read the options entries*/

const stoneOption = document.getElementById("stone");
const paperOption = document.getElementById("paper");
const scissorsOption = document.getElementById("scissors");

/*We read the result entries*/

const resultGame = document.getElementById("result");

//we start the game

stoneOption.addEventListener("click", ()=>{
    startGame('stone');
});

paperOption.addEventListener("click", ()=>{
    startGame('paper');
});

scissorsOption.addEventListener("click", ()=>{
    startGame('scissors');
});

function startGame(option){

//pc movement
const movPc = pcMovement();

//user movement
const movUser = option;

//movement comparison

const comp = comparison(movPc, movUser);

//result
if (comp ==1) {
    resultGame.innerHTML = "User-chooses" +movUser+ "<br> Pc-chooses" +movPc+"<br> <span class='loser'> You LOSE !!</span>";
}
if (comp ==2) {
    resultGame.innerHTML = "User-chooses" +movUser+ "<br> Pc-chooses" +movPc+"<br> <span class='winner'> You WIN !!</span>";
}
if (comp ==3) {
    resultGame.innerHTML = "User-chooses" +movUser+ "<br> Pc-chooses" +movPc+"<br> <span class='draw'> The game is a draw !!</span>";
}
}

function pcMovement(){
    const options = ['stone','paper','scissors'];
    const random = Math.floor(Math.random()*3);
    const mov = options [random];
    return (mov);
}

function comparison (pc,user){
    switch (pc+user){
        case 'stonescissors':
        case 'paperstone':
        case 'scissorspaper':
            return 1; //win
        case 'scissorsstone':
        case 'stonepaper':
        case 'paperscissors':
            return 2; //lose
        case 'paperpaper':
        case 'paperstone':
        case 'scissorscissors':
            return 3; //draw
    }

}

