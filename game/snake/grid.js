let grid = 21;

export function randomGrid(){
  return {
    x : Math.floor(Math.random() * grid),
    y : Math.floor(Math.random() * grid)
  }
}