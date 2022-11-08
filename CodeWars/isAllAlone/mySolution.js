function allAlone(house) {
  const potusCoords = findPotus(house)
  const initWallCoords = findWall(house, potusCoords)
  const wallMap = mapHouse(house, initWallCoords)
  return !isSomeO(wallMap, house);
}

function isSomeO(wallMap, house){
  return house[0].some((_, x)=>{
    let canSearch = false;
    return house.some((_,y)=>{
      if(wallMap[[y,x]] === "#" && wallMap[[y + 1,x]] !== "#"){
        canSearch = !canSearch
      }
      if(canSearch){
        return house[y][x] === "o"
      }
    })
  })
}

function findPotus(house){
  let potusCoords;
  house.find((row, y) =>
    row.find((col, x) =>{
      const coords = [y,x];
      potusCoords = house[y][x] === 'X' && coords
      return house[y][x] === 'X'
    })
  )
  return potusCoords;
}

const findWall = function(house, [y,x]) {
  let wallCoords = [];
  while(wallCoords.length === 0 && x < house[y].length) {
    wallCoords =  house[y][++x] === '#' ? [y,x] : []
  }
  return wallCoords;
}

function mapHouse (house, initWallCoords){
  const mapping = {}
  let pointer = initWallCoords
  let direction = new DirectionHandler()
  while(!mapping[pointer]){
    if(isWall(movePointer(pointer, direction.coords, house), house)){
      mapping[pointer] = "#"
      pointer = movePointer(pointer, direction.coords, house)
      direction = new DirectionHandler(direction.coords)
    }
    else{
      direction.next();
    }
  }
  return mapping
}

class DirectionHandler{
  constructor(coords = [-1,0]){
    this.directions = {"-1,0":[0,1], "0,1": [1,0] , "1,0": [0,-1], "0,-1": [-1,0]}
    this.initDir = coords;
    this.coords = coords;
  }
  next(){
    const nextDir = this.directions[this.coords]
    const isInline = [this.initDir[0] + nextDir[0], this.initDir[1] + nextDir[1]].every(axis => axis === 0)
    this.coords = isInline ? this.directions[nextDir] : nextDir
  }
}


function movePointer(pointer, movement, area){
  const y = pointer[0] + movement[0];
  const x = pointer[1] + movement[1];
  const xInArea = x >= 0 && x < area[0].length 
  const yInArea = y >= 0 && y < area.length
  return yInArea &&  xInArea ? [y,x] : []
}

function isWall(pointer, area){
  const y = pointer[0]
  const x = pointer[1]
  return pointer.length > 0 && area[y][x] === "#" 
}

const result = allAlone([
  "  o                o        #######".split(''),
  "###############             #     #".split(''),
  "#o            #        o    #     #".split(''),
  "#  X          ###############     #".split(''),
  "#                                 #".split(''),
  "###################################".split('')
])

console.log(result)

//is pass by reference or by value?

// function snailFinding(snail, target, matrix){
//   let steps = 0;
//   let power = 0;
//   while(snail === target){
//     snail = move(snail, steps)
//     if(power % 2 === 0) steps++
//     power++
//   }
// }

// function move(snail, steps){
//   //up, right, button, left
//   const movements = [[-1,0],[0,1],[1,0],[-1,0]]
//   const movement = movements[steps % movements.length]
//   const y = snail[0] + (movement[1] * steps);
//   const x = snail[1] + (movement[1] * steps);
//   return [y, x]
// }

//https://www.codewars.com/kata/5c230f017f74a2e1c300004f/train/javascript