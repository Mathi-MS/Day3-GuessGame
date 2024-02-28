var userinput = document.getElementById("userinput")
var computer = document.getElementById("computer-guess")
var corw = document.getElementById("corw")
var score = document.getElementById("score")

//function

function userguess() {
    score.textContent = Number(score.textContent)
    var cguess = Math.ceil(Math.random()*10)
    computer.textContent = cguess
    if(userinput.value == cguess){
        corw.textContent = "Right !"
        score.textContent = Number(score.textContent) + 1
        userinput.value = ""
        corw.style.color="green"
    }
    else{
        corw.textContent = "Wrong !"
        score.textContent = Number(score.textContent) -1
        userinput.value = ""
        corw.style.color="red"
        if(score.textContent == 0){
            alert("You lose")
            score.textContent = 10
        }
        else if(score.textContent == 10){
            alert("You Won")
        }
    }
}