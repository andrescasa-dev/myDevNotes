function breadthFirstSearch(rootNode){
  let queue = [rootNode]
  const result = []
  while(queue.length > 0){
    const current = queue.shift();
    //[1,node,null] => [node], with the code bellow i guarantee don't use the value property and node equal to null
    const children = Object.values(current).slice(1).filter(child => child !== null);
    if(children.length > 0) queue.push(...children)
    result.push(current.value)
  }
  return result
}

const tree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
};

function recursiveBreadthFirstSearch(rootNode, result, queue, isStarted){
  if(!isStarted){
    queue = [rootNode] 
    result = []
    isStarted = true
  }
  if(queue.length === 0) return result
  const current = queue.shift();
  const children = Object.values(current).slice(1).filter(child => child !== null);
  if(children.length > 0) queue.push(...children)
  result.push(current.value)
  return recursiveBreadthFirstSearch(rootNode, result, queue, isStarted)
}

console.log(recursiveBreadthFirstSearch(tree))
