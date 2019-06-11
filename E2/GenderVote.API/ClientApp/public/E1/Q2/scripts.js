function drawSquares() {
    'use strict';

    const squaresCanvas = document.getElementById('squares__canvas');
    squaresCanvas.width = 500;
    squaresCanvas.height = 500;

    var ctx = squaresCanvas.getContext("2d");

    ctx.fillStyle = "#5A9BD5";
    ctx.fillRect(0, 0, 500, 500);

    ctx.fillStyle = "#FFFF01";
    ctx.fillRect(150, 150, 200, 200);
}

drawSquares();