// generate random number 1 - 10
function guessGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let guess
    do {
        guess = prompt("guess a random number")
        console.log(randomNumber, guess)

        if (randomNumber < guess) {
            console.log("too high")
        }
        else if (randomNumber > guess) {
            console.log("too low")
        }

    }
    while (guess != randomNumber)
    console.log("you won")

}

guessGame()


// give ability to guess


//  prompt until right guess


