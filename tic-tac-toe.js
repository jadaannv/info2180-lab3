document.addEventListener('DOMContentLoaded', (event) => {
    //initialising any varibales to be used 
    let play = 1;  // player's turn
    let infoDisplay = document.getElementById("status");  // status message on screen
    let gameOver = false;

    //initialise an array to keep track of the current state of the game    
    let boardTiles = ["", "", "", "", "", "", "", "", ""];

    // Exercise 1: display the game board 
    let board = document.getElementById("board").children;
    for (let c = 0; c < board.length; c++){

        const cell = board[c];
        cell.setAttribute("class", "square");
        cell.id = c;

        // Exercise 3: hover; place before click listener
         cell.addEventListener("mouseover", function() {
            cell.classList.add("hover");
        })

        cell.addEventListener("mouseout", function() {
            cell.classList.remove("hover")
        })

        // Exercise 2: add X or O when player clicks
        cell.addEventListener("click", function() {
            if(cell.textContent == 0 && gameOver == false){

                if (isEven(play) == true){
                    cell.textContent = "O";
                    cell.classList.add("square", "O");
                    boardTiles[c] = "O";
                    //console.log(play);
                    infoDisplay.textContent = "It is now X's turn."
                    //winner(infoDisplay, boardTiles);
                }
                else if (isEven(play)== false) {
                    cell.textContent = "X";
                    cell.classList.add("square", "X");
                    boardTiles[c] = "X";
                    infoDisplay.textContent = "It is now O's turn."
                    //winner(infoDisplay, boardTiles);
                }
                
                gameOver = winner(infoDisplay, boardTiles);
                play++;
            }
        
       

        });

        //Exercise 5: reset game
        let reset = document.querySelector(".btn");
        reset.addEventListener ("click", function() {
            cell.textContent ="";
            cell.classList.remove("X");
            cell.classList.remove("O");
            infoDisplay.textContent = "Move your mouse over a square and click to play an X or an O.";
            infoDisplay.classList.remove("you-won");
            play = 1;
            boardTiles = ["", "", "", "", "", "", "", "", ""];
            gameOver = false;
        }); 

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

// Exercise 4: Check for winner
function winner(infoDisplay, boardTiles){
    let winningCells = [
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < winningCells.length; i++) {
        let row = winningCells[i];

        if (
            boardTiles[row[0]] == boardTiles[[row[1]]] && boardTiles[row[1]] == boardTiles[row[2]]
            ) {
                infoDisplay.classList.add("you-won");
                infoDisplay.textContent = ('Congratulations! ' + boardTiles[row[0]] + ' is the Winner!');
            return true;
        }

        else{
            return false;
        }
    }





}


 


