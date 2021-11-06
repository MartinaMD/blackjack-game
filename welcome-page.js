const submBtn = document.getElementById("submit-btn")
let playerName = document.getElementById("player-name").value

submBtn.addEventListener("click", function() {
    localStorage.setItem("playerName", JSON.stringify(document.getElementById("player-name").value))
    let RandomCoin = Math.floor(Math.random()*500 )
    console.log(RandomCoin)
    localStorage.setItem("playerCoin", JSON.stringify(RandomCoin))
})

