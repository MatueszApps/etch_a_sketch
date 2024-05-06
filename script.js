document.querySelector('.btn').addEventListener('click', function() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear previous squares

    let numSquares = prompt("Please enter the number of squares:");
    numSquares = parseInt(numSquares); // Convert string input to integer

    if (!isNaN(numSquares) && numSquares > 0) {
        let decrementAmount = 255 / numSquares; // Determine color decrement amount
        let currentColorValue = 255; // Start with white (RGB: 255, 255, 255)

        for (let i = 0; i < numSquares; i++) {
            const square = document.createElement('div');
            square.style.width = '16px';
            square.style.height = '16px';
            square.style.border = '1px solid black';
            square.style.display = 'flex';
            square.style.backgroundColor = `rgb(${currentColorValue}, ${currentColorValue}, ${currentColorValue})`;

            square.addEventListener('mouseover', function() {
                currentColorValue -= decrementAmount; // Decrease the RGB value
                currentColorValue = Math.max(currentColorValue, 0); // Ensure the color value doesn't go below 0
                this.style.backgroundColor = `rgb(${currentColorValue}, ${currentColorValue}, ${currentColorValue})`;
            });

            container.appendChild(square);
        }
    } else {
        alert("Please enter a valid number.");
    }
});