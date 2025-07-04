let homeScore = 0
let guestScore = 0

function addOneGuest() {
    guestScore += 1
    score = document.getElementById("guest-score")
    score.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    score = document.getElementById("guest-score")
    score.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    score = document.getElementById("guest-score")
    score.textContent = guestScore
}

function addOneHome() {
    homeScore += 1
    score = document.getElementById("home-score")
    score.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    score = document.getElementById("home-score")
    score.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    score = document.getElementById("home-score")
    score.textContent = homeScore
}