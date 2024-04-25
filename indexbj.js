let player = {
    name:"Noel", 
    chips: 123
}
let arrayCard = []
let sum = 0
let hasBlackJack = false  
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
// introducing a boolean value to understand the state  of the cashing out game


//dom manipulation to render to html 
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13) + 1
    if (randomNumber === 1){
        return 11
    }else if (randomNumber >=11 && randomNumber<=13){
        return 10 
    } else {
        return randomNumber
    }
    
}

// writing a conditional state4ment

function startGame(){
    let firstCard = arrayCard.push(getRandomCard()) 
    let secondCard = arrayCard.push (getRandomCard())
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards:"
    for (let i = 0 ; i <arrayCard.length; i++){
        cardEl.textContent += arrayCard [i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20){
        message = "Do you want to draw a new card !"
    }
    else if ( sum === 21) {
        message = "You've got a blackjack ! "
        hasBlackJack = true
    } else {
        message =  "You're out of the game! "
        isAlive = false
    }

    messageEl.textContent = message
}


//writing a random number 

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        arrayCard.push(thirdCard)
        sum += thirdCard
        renderGame()
    }
    
    


}

