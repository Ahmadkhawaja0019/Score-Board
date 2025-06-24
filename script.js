let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeCount = 0
let guestCount = 0

function incrementHome1() {
    homeCount += 1
    homeEl.textContent = homeCount
}

function incrementHome2() {
    homeCount += 2
    homeEl.textContent = homeCount
}

function incrementHome3() {
    homeCount += 3
    homeEl.textContent = homeCount
}

function incrementGuest1() {
    guestCount += 1
    guestEl.textContent = guestCount
}

function incrementGuest2() {
    guestCount += 2
    guestEl.textContent = guestCount
}

function incrementGuest3() {
    guestCount += 3
    guestEl.textContent = guestCount
}

function newgame() {
    homeCount = 0
    guestCount = 0
    homeEl.textContent = homeCount
    guestEl.textContent = guestCount
}