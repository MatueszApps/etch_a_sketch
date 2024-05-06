document.querySelector('.btn').addEventListener('click', function() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear previous squares

    let numSquares = prompt("Please enter the number of squares:");
    numSquares = parseInt(numSquares); // Convert string input to integer

    if (!isNaN(numSquares) && numSquares > 0) {
        for (let i = 0; i < numSquares; i++) {
            const square = document.createElement('div');
            square.style.width = '16px'; // Set the size of the square to 16x16 pixels
            square.style.height = '16px';
            square.style.border = '1px solid black'; // Set the border of the square
            square.style.display = 'inline-block'; // Make squares sit in a line
            
            container.appendChild(square);
        }
    } else {
        alert("Please enter a valid number.");
    }
});

