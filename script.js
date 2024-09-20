const checkButton = document.getElementById("check-btn")
const userInput = document.getElementById("user-input")
const resultsDiv = document.getElementById("results-div")
const clearButton = document.getElementById("clear-btn")

const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

function promptUser() {
    if (userInput.value === "") {
        prompt("Please provide a phone number")
    } else {
        resultsDiv.textContent = userInput.value;
    }
}

function clearDiv(){
    resultsDiv.textContent = ""
}

checkButton.addEventListener("click", promptUser)
clearButton.addEventListener("click", clearDiv)