// old version
// let player = {
//     name: "Martyna",
//     chips: 200
// }


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("value-el")
const playerEl = document.getElementById("player-el")
const playerNameLocalStorage = JSON.parse(localStorage.getItem("playerName"))
const playerCoinLocalStorage = JSON.parse(localStorage.getItem("playerCoin"))

playerEl.textContent = `Name: ${playerNameLocalStorage}\u00A0\u00A0\u00A0\u00A0\u00A0Money: $${playerCoinLocalStorage}`

//Add images to cards
//change "Cards:" to "value"

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Value:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]}`
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = `Do you want to draw a new card?`
    } else if (sum === 21) {
        message = `You've got Blackjack! Congrats!`
        hasBlackJack = true
        isAlive = false
    } else {
        message = `You're out of the game!`
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

// function newCoins() {
//     isAlive = false;
//     if (message === `You've got Blackjack! Congrats!`) {
//         playerCoinLocalStorage = playerCoinLocalStorage + 200
//         return playerCoinLocalStorage
//         console.log(playerCoinLocalStorage)
//     } else if (message === `You're out of the game!`) {
//         playerCoinLocalStorage = playerCoinLocalStorage - 50
//         return playerCoinLocalStorage
//     }

// }