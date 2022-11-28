class Node {
  constructor(value) {
    this.value = value;
    this.right = null; //must be another node
    this.left = null; //must be another node
  }
}

class tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value)
      return this
    }
    let pointer = this.root
    let getDirection = () => value > pointer.value ? 'right' : 'left' //what happens if is equal

    while(true){
      if(!pointer[getDirection()]){
        pointer[getDirection()] = new Node(value)
        console.log(`[${pointer.value}] ==(${getDirection()})==> [${pointer[getDirection()].value}]`)
        return this
      }
      pointer = pointer[getDirection()]
    }
  }
  
  search(value) { 
    if(this.root === null) return null
    let pointer = this.root
    let getDirection = () => value > pointer.value ? 'right' : 'left' //refector
    while (pointer !== null && pointer.value !== value) {
      pointer = pointer[getDirection()]
    }
    return pointer || null;
  }

  #findPrevNode(value){
    console.log("the root node: " + this.root.value)
    if(this.root === null) return null
    let pointer = this.root
    let prev = null
    let getDirection = () => value > pointer.value ? 'right' : 'left' //refector
    while (pointer !== null) {
      if(pointer.value === value){
        return (pointer.left && prev === null) ? [pointer.left, pointer] : [prev, pointer];
      }
      prev = pointer;
      pointer = pointer[getDirection()]
    }
    return null;
  }

  #traverseAllToLeft(initNode){
    let pointer = initNode;
    let prev = null;
    while(true){
      if(pointer.left === null) return [pointer, prev]
      prev = pointer;
      pointer = pointer.left
    }
  }

  #findSuccessorNode(initNode){
    let successor = initNode.right;
    let prev = null;
    if(successor){
      if(successor.left) [successor, prev] = this.#traverseAllToLeft(successor)
      [successor, prev] = [successor, null]
    }
    else{
      [successor, prev] = [initNode.left, null]
    }
    return [successor, prev];
  }

  delete(value) {    
    const [prevTarget, target] = this.#findPrevNode(value)
    const [successor, prevSuccessor] = this.#findSuccessorNode(target) 

    console.log({prevTarget, target,successor, prevSuccessor})
    if(!prevTarget && !successor) return null
    if(!prevTarget || target === this.root) this.root = successor
    else{
      const successorDirection = successor.value < prevTarget.value ? 'left' : 'right'
      prevTarget[successorDirection] = successor  
    } 
    if(successor){
      if(prevSuccessor){
        const successorDirection = successor.value < prevSuccessor.value ? 'left' : 'right' // this can be better written 
        prevSuccessor[successorDirection] = null;
        successor.right = target.right
        successor.left = target.left
      }
      const oppositeSuccessorDirection = successor.value < target.value ? 'right' : 'left'
      successor[oppositeSuccessorDirection] = target[oppositeSuccessorDirection];
    }
    target.right = null
    target.left = null
    return this
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}



const myTree = new tree();
myTree.insert(7);
myTree.insert(1);
myTree.insert(10)
myTree.insert(9)
myTree.insert(8)
myTree.insert(12)
console.log("delete: " + myTree.delete(9))

console.log("======tree======")
console.log(JSON.stringify(traverse(myTree.root)))
// console.log( myTree.delete(8))

