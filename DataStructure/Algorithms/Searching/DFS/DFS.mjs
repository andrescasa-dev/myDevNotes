import { exampleTree } from "../treeExample.mjs";

function deepFirstSearch(rootNode, result = []) {
  const isLeaf = !rootNode.left && !rootNode.right

  if (rootNode.left) result.concat(deepFirstSearch(rootNode.left, result))
  if (rootNode.right) result.concat(deepFirstSearch(rootNode.right, result))
  result.push(rootNode.value)

  return isLeaf ? result.concat(rootNode.value) : result
}

const myResult = deepFirstSearch(exampleTree)
console.log(myResult)