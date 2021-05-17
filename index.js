function ifClicked(){
    randomNum = Math.floor(Math.random()*6) + 1;
    randomNum2 = Math.floor(Math.random()*6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png")

    if (randomNum>randomNum2){
        document.querySelector(".container h1").textContent = " Player 1 Wins 🚩"
    }
    else if (randomNum === randomNum2){
        document.querySelector(".container h1").textContent = "Its A Draw!"
    }
    else {
        document.querySelector(".container h1").textContent = " 🚩 Player 2 Wins"
    }
}