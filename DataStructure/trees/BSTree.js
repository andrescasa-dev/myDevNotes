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

    while (true) {
      if (!pointer[getDirection()]) {
        pointer[getDirection()] = new Node(value)
        console.log(`[${pointer.value}] ==(${getDirection()})==> [${pointer[getDirection()].value}]`)
        return this
      }
      pointer = pointer[getDirection()]
    }
  }

  search(value) {
    if (this.root === null) return null
    let pointer = this.root
    let getDirection = () => value > pointer.value ? 'right' : 'left' //refector
    while (pointer !== null && pointer.value !== value) {
      pointer = pointer[getDirection()]
    }
    return pointer || null;
  }

  searchTwo(value) {
    let current = this.root
    const getDirection = (currValue, toFindValue) => toFindValue > currValue ? 'right' : 'left'
    while (current !== null && value !== current.value) {
      const direction = getDirection(current.value, value)
      current = current[direction]
    }
    return current || null;
  }

  #findPrevNode(value) {
    if (this.root === null) return null
    let pointer = this.root
    let prev = null
    let getDirection = () => value > pointer.value ? 'right' : 'left' //refector
    while (pointer !== null) {
      if (pointer.value === value) {
        return (pointer.left && prev === null) ? [pointer.left, pointer] : [prev, pointer];
      }
      prev = pointer;
      pointer = pointer[getDirection()]
    }
    return [null, null];
  }

  #traverseAllToLeft(initNode) {
    let pointer = initNode;
    let prev = null;
    while (true) {
      if (pointer.left === null) return [pointer, prev]
      prev = pointer;
      pointer = pointer.left
    }
  }

  #findSuccessorNode(initNode) {
    let successor = initNode.right;
    console.log({ successor })
    let prev = null;

    if (successor) {
      if (successor.left) { [successor, prev] = this.#traverseAllToLeft(successor) }
      [successor, prev] = [successor, null]
    }
    else {
      [successor, prev] = [initNode.left, null]
    }
    return [successor, prev];
  }

  getDirection(boolean) {
    return boolean ? 'left' : right;
  }

  #direction({ from, to, reverse = false }) {
    let direction = from.value > to.value ? 'left' : 'right'
    if (reverse) direction = direction === 'left' ? 'right' : 'left'
    console.log({ direction })
    return direction
  }


  delete(value) {
    const [prevTarget, target] = this.#findPrevNode(value)
    if (target === null) return null
    const [successor, prevSuccessor] = this.#findSuccessorNode(target)
    if (!prevTarget && !successor) return null
    if (!prevTarget || target === this.root) this.root = successor
    else {
      prevTarget[this.#direction({ from: prevTarget, to: successor })] = successor
    }
    if (successor) {
      if (prevSuccessor) {
        prevSuccessor[this.#direction({ from: prevSuccessor, to: successor })] = null;
        [successor.right, successor.left] = [target.right, target.left]
      }
      else {
        const oppositeDirection = this.#direction({ reverse: true, from: target, to: successor })
        successor[oppositeDirection] = target[oppositeDirection];
      }
    }
    [target.right, target.left] = [null, null]
    return this
  }
}


function searchNode(node, value){
  if(node === null) return null
  if(node.value === value) return node.value
  const nextDirection = value > node.value ? node.right : node.left
  return searchNode(nextDirection, value)
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

function BreadthFirstTraversal(node){
  if(node === null) return false
  console.log('lvl of ' + node.value)
  let msg = ''
  if(node.left) msg += `${node.left.value} `
  if(node.right) msg += node.right.value
  if(msg !== '')console.log(msg)
  if(node.left) BreadthFirstTraversal(node.left)
  if(node.right) BreadthFirstTraversal(node.right)
}

const myTree = new tree();
myTree.insert(7);
myTree.insert(1);
myTree.insert(10)
myTree.insert(9)
myTree.insert(8)
myTree.insert(12)


console.log("======tree======")
// console.log(myTree.searchTwo(9))
console.log("======Node search======")
BreadthFirstTraversal(myTree.root)

