import {snakeSpeed, Update as UpdateSnake, draw as drawSnake} from "./snake.js"
import { Update as UpdateFood, draw as drawFood } from "./Food.js";
let lastRanderTime = 0;
let gameOvar = false;
let gameon = true;
const gameBoard = document.getElementById("game-board");

if (gameon){
function main(currentTime){
    if (gameOvar){
      document.getElementById("game-ovar").classList.add("game-ovar");
      gameon = false;
    }
    if (!gameOvar){
      document.getElementById("game-ovar").classList.remove("game-ovar");
    }
    window.requestAnimationFrame(main);
    const s = (currentTime - lastRanderTime) / 1000;
    if (s < 1 / snakeSpeed) return;
    lastRanderTime = currentTime;

    Update();
    draw();
}
window.requestAnimationFrame(main);
}

function Update (){
  UpdateSnake();
  UpdateFood();
  // checkDearh();
}
function draw (){
    gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard)
}

function checkDearh(){
  gameOvar = u(getSnake()) || obort();
}