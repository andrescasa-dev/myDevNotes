class DoubleLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0;
  }

  append(value){
    const newNode = new Node(value)
    if(this.length === 0) return this.handleFirstNode(newNode)

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode;
    this.length++
    return this
  }

  prepend(value){
    const newNode = new Node(value)
    if(this.length === 0) return this.handleFirstNode(newNode)

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }

  delete(i){
    if(i === 0) return this.deleteFirst()
    if(i === this.length-1) return this.deleteLast()
    if(i >= this.length) return this

    const toDelete = this.traverseTo(i);
    const prevNode = toDelete.prev;
    const nextNode = toDelete.next;
    this.link(prevNode, nextNode);
    toDelete.next = null;
    toDelete.prev = null;
    this.length--;
    return toDelete.value;
  }

  deleteFirst(){
    const nextNode = this.head.next
    this.link(null, nextNode)
    this.link(this.head, null)
    this.head = nextNode;
    this.length--
    return this
  }

  deleteLast(){
    const prevNode = this.tail.prev
    this.link(prevNode, null);
    this.link(null, this.tail)
    this.tail = prevNode;
    
    this.length--
    return this
  }

  insert(i, value){
    if(i === 0) return this.prepend(value)
    if(i === this.length) return this.append(value)
    if(i > this.length) return this

    const newNode = new Node(value)
    const current = this.traverseTo(i);
    const prevNode = current.prev

    this.link(newNode, current);
    this.link(prevNode, newNode);
    this.length++
    return this
  }

  link(before,after){
    if(before) before.next = after
    if(after) after.prev = before
  }


  traverseTo(index){
    let pointer = this.head;
    while(index > 0){
      pointer = pointer.next;
      index--
    }
    return pointer
  }

  handleFirstNode(newNode){
    this.head = newNode
    this.tail = newNode
    this.length++
    return this
  }

  print(){
    let pointer = this.head;
    let arr = []
    while(pointer !== null){
      arr.push(pointer.value)
      pointer = pointer.next
    }
    return arr
  }

  printBackwards(){
    let pointer = this.tail;
    let arr = []
    while(pointer !== null){
      arr.push(pointer.value)
      pointer = pointer.prev
    }
    return arr
  }
}

class Node{
  constructor(value){
    this.value = value
    this.next = null
    this.prev = null
  }
}

const doubleList = new DoubleLinkedList();
doubleList.append(1);
doubleList.append(2);
doubleList.append(3);
console.log({print: doubleList.print(), back: doubleList.printBackwards(), head: doubleList.head.value, tail: doubleList.tail.value})

doubleList.delete(3);
console.log({print: doubleList.print(), back: doubleList.printBackwards(), head: doubleList.head.value, tail: doubleList.tail.value})