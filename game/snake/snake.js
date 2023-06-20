import { getinput } from "./input.js";

export const snakeSpeed = 5;
const Snakebody = [
    { x : 11, y : 11 }
];
let newSegments = 0;

export function Update (){
    addSegments();
    let input = getinput();
    for (let i = Snakebody.length - 2; i >= 0; i--){
        Snakebody[ i + 1 ] = { ...Snakebody[i] };
    }

    Snakebody[0].x += input.x;
    Snakebody[0].y += input.y;
}
export function draw (gameBoard){
    Snakebody.forEach((segment) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.backgroundColor = "red"
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
})
}

export function expandSnake (amount){
newSegments += amount;
}

export function onsnake (position){
  return Snakebody.some(segment => {
    return equalpositions(segment, position)
  })
}

function equalpositions (pos1, pos2){
    return(
        pos1.x === pos2.x && pos1.y === pos2.y
    )
}

function addSegments (){
  for(let i = 0; i < newSegments; i++){
    Snakebody.push({ ...Snakebody[Snakebody.length - 1]})
  }

  newSegments = 0;
}