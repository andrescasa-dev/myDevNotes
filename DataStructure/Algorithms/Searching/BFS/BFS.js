import { exampleTree } from "../treeExample.mjs";

function breadthFirstSearch(rootNode) {
  let queue = [rootNode]
  const result = []
  while (queue.length > 0) {
    const current = queue.shift();
    //i guarantee don't use the value property and node equal to null, eg: [1,node,null] ==turn in==> [node] 
    const children = Object.values(current).slice(1).filter(child => child !== null);
    if (children.length > 0) queue.push(...children)
    result.push(current.value)
  }
  return result
}

function recursiveBreadthFirstSearch(rootNode, result = [], queue = [rootNode]) {
  if (queue.length === 0) return result
  const current = queue.shift();
  const children = Object.values(current).slice(1).filter(child => child !== null);
  queue.push(...children)
  result.push(current.value)
  return recursiveBreadthFirstSearch(rootNode, result, queue)
}

console.log(recursiveBreadthFirstSearch(exampleTree))
