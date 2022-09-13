function getPINs(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t])).reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}


var adj = [[0,8],
           [1,2,4],
           [2,1,3,5],
           [3,2,6],
           [4,1,5,7],
           [5,2,4,6,8],
           [6,3,5,9],
           [7,4,8],
           [8,0,5,7,9],
           [9,6,8]];
var getPINs = observed => adj[observed[0]]
  .map(x => observed.length == 1 ? [x.toString()] : getPINs(observed.slice(1)).map(y => x + y))
  .reduce((x,y) => x.concat(y));


function anotherSolution(observed) {
  var obs = observed.toString();
  var t = [['0','8'],['1','2','4'],['1','2','3','5'],['2','3','6'],['1','4','5','7'],['2','4','5','6','8'],['3','5','6','9'],['4','7','8'],['5','7','8','9','0'],['6','8','9']];   
  var list = [''];
  for ( let i = 0 ; i < obs.length ; i++){
      let copy = [];
      for ( let j = 0 ; j < t[obs[i]].length; j++ ){
        for ( let k = 0 ; k < list.length; k++){
          copy.push(list[k].concat((t[obs[i]][j])));
        }
      }
      list = copy;
    }
    return list;
}