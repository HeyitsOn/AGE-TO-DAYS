function displayResult() {
    // Get the value entered in the input field
    let ageInput = document.getElementById("age").value;

    // Convert Age to days
    let days = ageInput * 365.25;

    // Display the result in the paragraph with id "result"
    document.getElementById("result").innerHTML = "Days: " + days.toFixed(2);
}

// Add an event listener to the button to trigger the conversion
document.getElementById("button").addEventListener("click", displayResult);