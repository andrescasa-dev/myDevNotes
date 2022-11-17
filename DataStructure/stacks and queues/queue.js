class Queue {
  constructor(){
    this.head = null
    this.length = 0
    this.tail = null
  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this
  }

  peek(){
    return this.isEmpty() ? null : this.head.value;
  }

  dequeue(){
    const toRemove = this.head;
    if(this.isEmpty()) return null
    if(this.length === 1) this.tail = null
    this.head = this.head.next;
    toRemove.next = null;
    this.length--;
    return toRemove.value;
  }

  toString(){
    let pointer = this.head;
    let msg = ""
    while(pointer){
      msg += `[${pointer.value}]=>`
      pointer = pointer.next;
    }
    msg += "null"
    return msg;
  }

  isEmpty(){
    return this.length === 0;
  }
}

class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}


const persons = ["andres", "camilo", "robin", "alex"]
const waitingLine = new Queue();
const print = () => console.log({
  queue: waitingLine.toString(),
  length: waitingLine.length,
  peek: waitingLine.peek(),
})

persons.forEach(person => waitingLine.enqueue(person))
print();

for (let i = 0; i < 5; i++) {
  const removed = waitingLine.dequeue();
  console.log({removed})
  print();
}




