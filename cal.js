// Get reference to the output display
const outputDisplay = document.getElementById('result');

// Add event listener to all buttons
document.querySelectorAll('.buttons2 button').forEach(button => {
    button.addEventListener('click', () => {
        // Get the value of the clicked button
        const value = button.dataset.value;

        // Perform different actions based on the button's value
        switch (value) {
            case 'AC': // Clear all
                outputDisplay.textContent = '0';
                break;
            case 'Clear': // Clear last character
                outputDisplay.textContent = outputDisplay.textContent.slice(0, -1);
                break;
            case '=': // Evaluate expression
                try {
                    outputDisplay.textContent = eval(outputDisplay.textContent);
                } catch (error) {
                    outputDisplay.textContent = 'Error';
                }
                break;
            default: // Append the clicked button's value to the output display
                if (outputDisplay.textContent === '0' || outputDisplay.textContent === 'Error') {
                    outputDisplay.textContent = value;
                } else {
                    outputDisplay.textContent += value;
                }
        }
    });
});
