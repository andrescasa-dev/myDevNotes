/* -------------------------------- Remember -------------------------------- */
/* * Select the proper data structure (or if it doesn't need ir)
/* -------------------------------- Remember -------------------------------- */

function Point(x,y){
  this.x = x;
  this.y = y;
  this.moveX = function() {this.x ++;}
}

let p1 = new Point(100,100);
let p2 = new Point(100,100);

p2.x++;
debugger;