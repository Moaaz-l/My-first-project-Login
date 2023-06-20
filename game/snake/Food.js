import { onsnake, expandSnake } from "./snake.js";
import { randomGrid } from "./grid.js";
let Food = getRandom();
const EXPANSION_RATE = 2;

export function Update (){
  if(onsnake(Food)){
    expandSnake(EXPANSION_RATE)
    Food = getRandom();
  }
}

export function draw (gameBoard){
        const FoodElement = document.createElement("div");
        FoodElement.style.gridColumnStart = Food.x;
        FoodElement.style.gridRowStart = Food.y;
        FoodElement.classList.add("food")
        gameBoard.appendChild(FoodElement);
}

function getRandom (){
    let newFood;
    while(newFood == null || onsnake(newFood)){
        newFood = randomGrid();
    };

    return newFood;
}