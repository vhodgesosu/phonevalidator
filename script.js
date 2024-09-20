const checkButton = document.getElementById("check-btn")
const userInput = document.getElementById("user-input")
const resultsDiv = document.getElementById("results-div")
const clearButton = document.getElementById("clear-btn")

const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

function validatePhoneNumber(phoneNumber) {
    return phoneRegex.test(phoneNumber);
}

function promptUser() {
    const userPhoneNumber = userInput.value
    if (userPhoneNumber === "") {
        alert("Please provide a phone number")
    } else if (validatePhoneNumber(userPhoneNumber)) {
        resultsDiv.textContent = "Valid US number: " + userPhoneNumber;
    } else {
        resultsDiv.textContent = "Invalid US number: " + userPhoneNumber;
    }
}

function clearDiv(){
    resultsDiv.textContent = ""
}

checkButton.addEventListener("click", promptUser)
clearButton.addEventListener("click", clearDiv)