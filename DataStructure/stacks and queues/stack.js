class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value)
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this
  }

  pop(){
    if(this.isEmpty()) return null
    const toRemove = this.top;
    this.top = this.top.next;
    toRemove.next = null;
    this.length--;
    return toRemove
  }

  isEmpty(){
    return this.length === 0
  }

  peek(){
    return this.isEmpty() ? null : this.top.value; 
  }

  print(){
    let pointer = this.top;
    console.log("====stack====")
    while(pointer){
      console.log(pointer.value)
      console.log("  |")
      console.log("  v")
      pointer = pointer.next
    }
    console.log("null")
    console.log("====stack====")
  }
}

const popElements = [];
const companies = new Stack();
companies.push("amazon").push('google').push("apple");
let firstItem = companies.peek();
console.log({firstItem, stackLength: companies.length, isEmpty: companies.isEmpty(), companies: companies.print(), popElements})


popElements.push(companies.pop())
popElements.push(companies.pop())
popElements.push(companies.pop())

firstItem = companies.peek();
console.log({firstItem, stackLength: companies.length, isEmpty: companies.isEmpty(), companies: companies.print(), popElements})
