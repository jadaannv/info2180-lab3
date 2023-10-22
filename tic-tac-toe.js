document.addEventListener('DOMContentLoaded', (event) => {
    //initialising any varibales to be used 
    let play = 1;  // player's turn
    let infoDisplay = document.getElementById("status");  // status message on screen
    let gameOver = false;

    //initialise an array to keep track of the current state of the game    
    let boardTiles = ["", "", "", "", "", "", "", "", ""];

    // display the game board 
    let board = document.getElementById("board").children;
    for (let c = 0; c < board.length; c++){

        const cell = board[c];
        cell.setAttribute("class", "square");
        cell.id = c;

        //add X or O when player clicks
        cell.addEventListener("click", function() {
            if(cell.textContent == 0 && gameOver == false){

                if (isEven(play) == true){
                    cell.textContent = "O";
                    cell.classList.add(".square.O");
                    boardTiles[c] = "O";
                    //console.log(play);
                    infoDisplay.textContent = "It is now X's turn."
                }
                else if (isEven(play)== false) {
                    cell.textContent = "X";
                    cell.classList.add(".square.X");
                    boardTiles[c] = "X";
                    infoDisplay.textContent = "It is now O's turn."
                }
                play++;
            }
        })

    }

});


function isEven(num){
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

}

 


