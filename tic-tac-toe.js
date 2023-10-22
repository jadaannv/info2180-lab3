document.addEventListener('DOMContentLoaded', (event) => {
    //initialising any varibales to be used 

    
    //initialise the array to keep track of the current state of the game    
    let boardTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    let board = document.getElementById("board").children;
    for (let c = 0; c < board.length; c++){

        const cell = board[c];
        cell.setAttribute("class", "square");

    }

});



