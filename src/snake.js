const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const foodSize = 3 * box; // Taille des aliments 3x3
let snake = [
    { x: 10 * box, y: 10 * box },
    { x: 11 * box, y: 10 * box },
    { x: 12 * box, y: 10 * box },
    { x: 13 * box, y: 10 * box }
];

let direction = 3; // Initial direction: left
let foods = [];
for (let i = 0; i < 3; i++) {
    foods.push(generateFood());
}

document.addEventListener("keydown", directionControl);

function directionControl(event) {
    if (event.keyCode == 37 && direction != 2) {
        direction = 3; // left
    } else if (event.keyCode == 38 && direction != 1) {
        direction = 0; // up
    } else if (event.keyCode == 39 && direction != 3) {
        direction = 2; // right
    } else if (event.keyCode == 40 && direction != 0) {
        direction = 1; // down
    }
}

function collision(newHead, snake) {
    for (let i = 0; i < snake.length; i++) {
        if (newHead.x == snake[i].x && newHead.y == snake[i].y) {
            return true;
        }
    }
    return false;
}

function generateFood() {
    let newFood;
    let overlapping;
    do {
        overlapping = false;
        newFood = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 17 + 1) * box
        };

        // Vérifier si la nouvelle nourriture se chevauche avec le serpent
        // (aX < (bX + bLen) && (aX + aLen) > bX) && (aY < (bY - bLen) && (aY - aLen) > bY)
        for (let i = 0; i < snake.length; i++) {
            if (newFood.x < (snake[i].x + box) && (newFood.x + foodSize) > snake[i].x && newFood.y < (snake[i].y + box) && (newFood.y + foodSize) > snake[i].y) {
                overlapping = true;
                break;
            }
        }

        // Vérifier si la nouvelle nourriture se chevauche avec d'autres aliments
        // (aX < (bX + bLen) && (aX + aLen) > bX) && (aY < (bY - bLen) && (aY - aLen) > bY)
        for (let i = 0; i < foods.length; i++) {
            if (newFood.x < (foods[i].x + foodSize) && (newFood.x + foodSize) > foods[i].x && newFood.y < (foods[i].y + foodSize) && (newFood.y + foodSize) > foods[i].y) {
                overlapping = true;
                break;
            }
        }
    } while (overlapping);

    return newFood;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    for (let i = 0; i < foods.length; i++) {
        ctx.fillStyle = "red";
        ctx.fillRect(foods[i].x, foods[i].y, foodSize, foodSize);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 3) snakeX -= box;
    if (direction == 0) snakeY -= box;
    if (direction == 2) snakeX += box;
    if (direction == 1) snakeY += box;

    let ateFood = false;
    for (let i = 0; i < foods.length; i++) {
        if (snakeX >= foods[i].x && snakeX < foods[i].x + foodSize &&
            snakeY >= foods[i].y && snakeY < foods[i].y + foodSize) {
            foods[i] = generateFood();
            ateFood = true;
            break;
        }
    }

    if (!ateFood) {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        alert("Game Over!");
        clearInterval(game);
    }

    snake.unshift(newHead);
}

let game = setInterval(draw, 200);