//------------------------------------------------------------------------//

// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out

// 3. Create a startGame() function. Move the conditional
//    below inside the body of the function.

// 4. Store the message-el paragraph in a variable called messageEl

// 5. Store the sum paragraph in a variable called sumEl

// 6. Render the sum on the page using this format -> "Sum:"

// 7. Store the cards paragraph in a variable called cardsEl

// 8. Render the cars on the page using this format -> "Cards: 10 4"

// 9. Create a new function called startGame() that calls renderGame()

// 10. Use getRandomCard() to set the values of firstCard and secondCard

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let cards = [firstCard, secondCard] // array - ordered list of items
let hasBlackJack = false
let isAlive = true
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") //---> this is a DOM
// let sumEl = document.querySelector("#sum-el") //---> its an ID or Class query Selecteor but its same result as a DOM.
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


let player = {   // this called objects in assigning a variable
    name: "Player Balance",
    chips: "100.000.000"
}

playerEl.textContent = player.name + ": ₱" + player.chips // this is when you redered the object variables 


console.log(cards)

// Make this function return a random number between 1 and 13

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // if 1     -> return 11
    // if 11-13 -> return 10

    if (randomNumber > 10) {
        return 10  // Jack, Queen, King
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {

    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {

 // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

 if (isAlive === true && hasBlackJack === false) {
    
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

 }
}

function resetGame() {

    // Reset all values to the initial state
    hasBlackJack = false
    isAlive = true
    cards = []
    sum = 0
    message = "Want to play a round?"

    // Clear UI
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum:"
    messageEl.textContent = message
}

