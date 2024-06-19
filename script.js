// control which level to play
let contain = document.querySelector(".contain"),
    left = document.querySelector(".contain .left"),
    right = document.querySelector(".contain .right"),
    container = document.querySelectorAll(".container")

left.addEventListener("click", _ => {
    contain.style.display = "none"
    container[0].classList.remove("f")
})
right.addEventListener("click", _ => {
    contain.style.display = "none"
    container[1].classList.remove("f")
})


// Control the Rules card
let button = document.querySelectorAll("button.RULES"),
    overview = document.querySelector(".overview"),
    card = document.querySelectorAll(".card"),
    closebut = document.querySelectorAll(".card .top img")

button[0].addEventListener("click", _ => {
    overview.classList.add("s")
    card[0].classList.add("s")
})
button[1].addEventListener("click", _ => {
    overview.classList.add("s")
    card[1].classList.add("s")
})

closebut[0].addEventListener("click", _ => {
    overview.classList.remove("s")
    card[0].classList.remove("s")
})
closebut[1].addEventListener("click", _ => {
    overview.classList.remove("s")
    card[1].classList.remove("s")
})

// Initiate the game Easy
let choose = document.querySelectorAll(".container.first .body.choose .cir"),
    back1 = document.querySelector(".container.first .body.choose"),
    back2 = document.querySelector(".container.first .body.playing"),
    choice = ["./images/icon-rock.svg", "./images/icon-paper.svg", "./images/icon-scissors.svg"],
    choice2 = ["Rock", "Paper", "Scissors"],
    playercir = document.querySelector(".container.first .body.playing .player .cir"),
    compcir = document.querySelector(".container.first .body.playing .comp .cir"),
    control = document.querySelector(".container.first .body.playing .control"),
    controlText = document.querySelector(".container.first .body.playing .control span"),
    controlbutton = document.querySelector(".container.first .body.playing .control button"),
    Score = document.querySelector(".container.first .num")


let player = ""
let computer = 0
let winner = 0 // [0 - 1 - 2] [Player - draw - computer]
choose.forEach(e => {
    e.addEventListener("click", _ => {
        player = e.attributes[1].value
        back1.classList.remove("ac")
        back2.classList.add("ac")
        Game()
    })
})

function Game() {
    if (player === "Rock") playercir.children[0].src = choice[0]
    else if (player === "Paper") playercir.children[0].src = choice[1]
    else if (player === "Scissors") playercir.children[0].src = choice[2]
    playercir.setAttribute("data-type", player)
    computer = Math.floor(Math.random() * choice.length)

    setTimeout(_ => {
        compcir.children[0].src = choice[computer]
        compcir.setAttribute("data-type", choice2[computer])
    }, 2000)

    setTimeout(_ => {
        if (player === "Rock") {
            if (choice2[computer] === "Scissors") winner = 0
            else if (choice2[computer] === "Rock") winner = 1
            else winner = 2
        }
        else if (player === "Paper") {
            if (choice2[computer] === "Rock") winner = 0
            else if (choice2[computer] === "Paper") winner = 1
            else winner = 2
        }
        else if (player === "Scissors") {
            if (choice2[computer] === "Paper") winner = 0
            else if (choice2[computer] === "Scissors") winner = 1
            else winner = 2
        }

        if (winner === 0) {
            controlText.innerHTML = "You Won!"
            playercir.classList.add("w")
            Score.innerHTML = Number.parseInt(Score.innerHTML) + 1
        }
        else if (winner === 1) {
            controlText.innerHTML = "Draw"
        }
        else {
            compcir.classList.add("w")
            controlText.innerHTML = "You Lost"
            Score.innerHTML = Number.parseInt(Score.innerHTML) - 1
        }

        control.classList.add("w")
    }, 3000)
}

controlbutton.addEventListener("click", _ => {
    back1.classList.add("ac")
    back2.classList.remove("ac")
    control.classList.remove("w")
    playercir.classList.remove("w")
    compcir.classList.remove("w")
    compcir.attributes[1].value = "none"
})


// Initiate the game Hard
let chooseH = document.querySelectorAll(".container.second .body.choose .cir"),
    back1H = document.querySelector(".container.second .body.choose"),
    back2H = document.querySelector(".container.second .body.playing"),
    choiceH = ["./images/icon-rock.svg", "./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-lizard.svg", "./images/icon-spock.svg"],
    choice2H = ["Rock", "Paper", "Scissors", "Lizard", "Spock"],
    playercirH = document.querySelector(".container.second .body.playing .player .cir"),
    compcirH = document.querySelector(".container.second .body.playing .comp .cir"),
    controlH = document.querySelector(".container.second .body.playing .control"),
    controlTextH = document.querySelector(".container.second .body.playing .control span"),
    controlbuttonH = document.querySelector(".container.second .body.playing .control button"),
    ScoreH = document.querySelector(".container.second .num")

chooseH.forEach(e => {
    e.addEventListener("click", _ => {
        player = e.attributes[1].value
        back1H.classList.remove("ac")
        back2H.classList.add("ac")
        GameH()
    })
})

function GameH() {
    if (player === "Rock") playercirH.children[0].src = choiceH[0]
    else if (player === "Paper") playercirH.children[0].src = choiceH[1]
    else if (player === "Scissors") playercirH.children[0].src = choiceH[2]
    else if (player === "Lizard") playercirH.children[0].src = choiceH[3]
    else if (player === "Spock") playercirH.children[0].src = choiceH[4]
    playercirH.setAttribute("data-type", player)
    computer = Math.floor(Math.random() * choiceH.length)

    setTimeout(_ => {
        compcirH.children[0].src = choiceH[computer]
        compcirH.setAttribute("data-type", choice2H[computer])
    }, 2000)

    setTimeout(_ => {
        if (player === "Rock") {
            if (choice2H[computer] === "Rock") winner = 1
            else if (choice2H[computer] === "Scissors") winner = 0
            else if (choice2H[computer] === "Lizard") winner = 0
            else winner = 2
        }
        else if (player === "Paper") {
            if (choice2H[computer] === "Paper") winner = 1
            else if (choice2H[computer] === "Rock") winner = 0
            else if (choice2H[computer] === "Spock") winner = 0
            else winner = 2
        }
        else if (player === "Scissors") {
            if (choice2H[computer] === "Scissors") winner = 1
            else if (choice2H[computer] === "Paper") winner = 0
            else if (choice2H[computer] === "Lizard") winner = 0
            else winner = 2
        }
        else if (player === "Lizard") {
            if (choice2H[computer] === "Lizard") winner = 1
            else if (choice2H[computer] === "Spock") winner = 0
            else if (choice2H[computer] === "Paper") winner = 0
            else winner = 2
        }
        else if (player === "Spock") {
            if (choice2H[computer] === "Spock") winner = 1
            else if (choice2H[computer] === "Rock") winner = 0
            else if (choice2H[computer] === "Scissors") winner = 0
            else winner = 2
        }

        if (winner === 0) {
            controlTextH.innerHTML = "You Won!"
            playercirH.classList.add("w")
            ScoreH.innerHTML = Number.parseInt(ScoreH.innerHTML) + 1
        }
        else if (winner === 1) {
            controlTextH.innerHTML = "Draw"
        }
        else {
            compcirH.classList.add("w")
            controlTextH.innerHTML = "You Lost"
            ScoreH.innerHTML = Number.parseInt(ScoreH.innerHTML) - 1
        }

        controlH.classList.add("w")
    }, 3000)
}

controlbuttonH.addEventListener("click", _ => {
    back1H.classList.add("ac")
    back2H.classList.remove("ac")
    controlH.classList.remove("w")
    playercirH.classList.remove("w")
    compcirH.classList.remove("w")
    compcirH.attributes[1].value = "none"
})