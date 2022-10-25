function loop_size(node){
  const map = new Map();
  let index = 0;
  while(map.has(node) === false){
      map.set(node, {node: node, index: ++index}) 
      node = node.next;
  }
  return index + 1 - map.get(node).index;
}

// not refactor version.

// function loop_size(node){
//   const map = new Map();
//   let index = 0;
//   let loopLength = 0;
//   map.set(node, {node, index})
//   while(node.next !== null && loopLength === 0){
//     if(map.has(node.next)) 
//       loopLength = index + 1 - map.get(node.next).index;
//     else{
//       map.set(node.next, {node: node.next, index: ++index}) 
//       node = node.next;
//     }
//   }
//   return loopLength;
// }