// Step 1: Define the function
function checkAnswer() {
    const correctAnswer = "4"; // Step 2: Define correct answer

    // Step 3: Get user selection
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare and give feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 5: Attach event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
