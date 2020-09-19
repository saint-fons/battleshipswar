let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;


while (isSunk === true) {
    guess = prompt("Ready, iam the fire! (enter number 0-6:)");

    if (guess < 0 || guess > 6) {
        alert("Please write number valid cell number")
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits = hits + 1;

            if (hits == 3) {

                isSunk = true;

                alert("Hello! u sunk my battleship!");
            }
        } else {
            alert("Sorry u miss")
        }
    }
}

let stat = "Ur took " + guesses + " guesses to take battleship, " + "which means ur accuracy was " + (3/guesses);

alert(stat);


















