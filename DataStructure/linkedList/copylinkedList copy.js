class LinkedList{
  constructor(){
    this.head = null;
    this.tail = this.head;
    this.length = 0
  }

  insert(index, value){
    let after = this.head;
    let prev = null
    const newNode = new Node(value)
    if(index >= this.length) return this
    if(index === 0) return this.prepend(value)
    if(index === (this.length - 1)) return this.append(value)
    
    while(index !== 0 ){
      prev = after;
      after = after.next;
      console.log({prev, after})
      index--;  
    }
    newNode.next = prev.next
    prev.next = newNode
    this.length++;
    return this
  }

  append(value){
    const newNode = new Node(value)
    if(this.length === 0){
      this.tail = newNode
      this.head = newNode
    }
    else{
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++;
    return this
  }

  prepend(value){
    this.length++;
    const newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;
    return this
  }

  delete(index){
  }

  toString(){
    let pointer = this.head;
    let str = ""
    if(pointer === null) return '[null]==>null'
    
    while(pointer !== null){
      str += `[${pointer.value}]=>`;
      pointer = pointer.next;
    }
    str += "null"
    return str
  }
}

class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

//transform the array [1,2,3] into a Linked list

const arr = [1,2,3]
const linkedList = new LinkedList();
arr.forEach(em => {
  console.log(linkedList.toString(), {length: linkedList.length})
  linkedList.append(em)
})
console.log(linkedList.toString(), {length: linkedList.length})
linkedList.insert(3,8)
console.log(linkedList.toString(), {length: linkedList.length})