const car = new Image();
car.src = './images/car.png';
const pista = new Image();
pista.src = './images/road.png';
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myGameArea = {
    frames: 0,
    score: function() {
        const points = Math.floor(this.frames / 5);
        context.font = '40px serif';
        context.fillStyle = 'white';
        context.fillText(`Score: ${points}`, 75, 50);
    },
};
class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.dx = 0;
        this.dy = 0;
        this.speed = 10;
    }
    left() {
        return this.x;
    }
    right() {
        return this.x + this.width;
    }
    top() {
        return this.y;
    }
    bottom() {
        return this.y + this.height;
    }
    crashWith(obstacle) {
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right());
    }
    update() { // GENERA UNA FIGURA COLOR ROJO
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    newPos() { // new Position del jugador o del obstáculo
        this.x += this.speed;
        this.y += this.speed;
    }
}
const backgroundImage = {
    img: pista,
    x: 0,
    y: 0,
    speed: 1,
    move: function() {
        /*  this.x += this.speed
         this.x %= text.width; */
        this.y += this.speed
        this.y %= canvas.height;
    },
    draw: function() {
        context.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
        context.drawImage(this.img, 0, this.y - canvas.height, canvas.width, canvas.height);
    }
}
const carro = new Component(50, 80, '', 250, 600);
const borrar = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
const imagenes = () => {
    //  context.drawImage(pista, 0, 0, canvas.width, canvas.height);
    context.drawImage(car, carro.x, carro.y, carro.width, carro.height);
}
const keyUp = () => {
    carro.dx = 0;
}
const moveRight = () => {
    console.log("me movi a la derecha");
    carro.dx = carro.speed;
}
const moveLeft = () => {
    console.log("me movi a la izquierda");
    carro.dx -= carro.speed;
}
const keyDown = (event) => {
    switch (event.key) {
        case "ArrowRight":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        default:
            return;
    }
}
const detectWalls = () => {
    if (carro.x < 60) {
        carro.x = 60;
    }
    if ((carro.x + carro.width) > canvas.width - 60) {
        carro.x = (canvas.width - carro.width) - 60;
    }
}
const newPos = () => {
        carro.x += carro.dx;
    }
    //Obstaculos
const myObstacles = []
function updateObstacles() {
    for (let i = 0; i < myObstacles.length; i++) {
        myObstacles[i].y += 1;
        myObstacles[i].update();
    }
    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
        let y = 0;
        let minWidth = 50;
        let maxWidth = 420;
        let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
        let minGap = 50;
        let maxGap = canvas.width;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        // PRIMER PIPE
        // constructor(width, height, color, x, y)
        myObstacles.push(new Component(width - gap, 30, 'green', 0, y));
        let minGap2 = 50;
        let maxGap2 = canvas.width;
        let gap2 = Math.floor(Math.random() * (maxGap2 - minGap2 + 1) + minGap2);
        setTimeout(() => {
        }, 3000);
        myObstacles.push(new Component(-width, 30, 'green', width + gap2, y - 130));
        // SEGUNDO PIPE
        //myObstacles.push(new Component(width, 30, 'green', width+gap, y-100));
        console.log(myObstacles)
    }
}
function checkGameOver(id) {
    const crashed = myObstacles.some(function(obstacle) {
        return carro.crashWith(obstacle); // DEVUELVE UN VERDADERO O FALSO
    });
    if (crashed) {
        cancelAnimationFrame(id)
    }
}
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        //reset()  
        startGame();
    };
    function startGame() {
        borrar();
        backgroundImage.move();
        backgroundImage.draw();
        detectWalls();
        imagenes();
        updateObstacles();
        myGameArea.score()
        newPos();
        let frameId = requestAnimationFrame(startGame);
        checkGameOver(frameId);
    }
}