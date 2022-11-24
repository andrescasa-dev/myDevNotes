class Node {
  constructor (value){
    this.value = value;
    this.right = null; //must be another node
    this.left = null; //must be another node
  }
}

class tree {
  constructor (value){
    this.root = new Node(value);
  }
   
  insert (value){
    let pointer = this.root
    let getDirection = () => value > pointer.value ? 'right': 'left' //what happens if is equal
    let hasChild = () => pointer[getDirection()] !== null

    while(hasChild()){
      pointer = pointer[getDirection()]
    }
    if(pointer.value !== value) {
      pointer[getDirection()] = new Node(value)
      console.log(`[${pointer.value}] ==(${getDirection()})==> [${pointer[getDirection()].value}]`)
    }
  }

  search(value){
    let pointer = this.root
    let getDirection = () => value > pointer.value ? 'right': 'left' //refector
    while( pointer !== null && pointer.value !== value){
      pointer = pointer[getDirection()]
    }
    return pointer ? pointer.value : null;
  }

  #searchPrevNode(value){
    if(value === this.root.value) return null

    let pointer = this.root;
    let getDirection = () => value > pointer.value ? 'right': 'left'
    let child = pointer[getDirection()];

    while(child && !child.value === value){
      pointer = child;
      child = child[getDirection()]
    }
    return child.value === value ? pointer : null;
  }

  #getPrevSuccessor(node){
    const start = node.right;
    let pointer = start;
    if(pointer.left === null) return node
    while(pointer.left.left !== null){
      pointer = pointer.left;
    }
    return pointer
  }
  
  //can't delete the root
  delete(value){
    const prevTarget = this.#searchPrevNode(value)
    if(!prevTarget) return false
    const prevSuccessor = this.#getPrevSuccessor(prevTarget)
    let getDirection = (value, target) => value > target.value ? 'right': 'left'
    const target = prevTarget[getDirection(value, prevTarget)]
    const successor = prevSuccessor.left
    
    prevSuccessor.left = successor.right
    prevTarget[getDirection(value, prevTarget)] = target
    successor.left = target.left
    successor.right = target.right
    return true
  }
}

const myTree = new tree(7);
myTree.insert(1);   
myTree.insert(10)
myTree.insert(8)
console.log( myTree.delete(8))