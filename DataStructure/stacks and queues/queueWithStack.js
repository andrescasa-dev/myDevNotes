class MixedQueue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0
    this.deCounter = 0
    this.dataStack = []
    this.peekStack = []
  }

  enqueue(value){
    if(this.empty()){
      this.last = value
      this.first = value
      this.peekStack.push(value)
    }
    else{
      this.last = value
    }
    this.dataStack.push(value)
    this.length++;
    return this
  }

  dequeue(){
    if(this.length === 0) return null
    if(this.deCounter === this.dataStack.length - 1){
      this.dataStack = []
      this.length--;
      this.deCounter = 0;
      this.first = null;
      this.last = null;
      return this.peekStack.pop()
    }
    this.deCounter++;
    this.first = this.dataStack[this.deCounter];
    const toRemove = this.peekStack.pop();
    this.peekStack.push(this.first);
    this.length--
    return toRemove;
  }

  peek(){
    return this.first;
  }

  empty(){
    return this.length === 0
  }

  toString(){
    return this.dataStack.slice(this.deCounter);
  }
}

const persons = ["andres", "camilo", "robin", "alex"]
const waitingLine = new MixedQueue();
const print = () => {console.log({
  queue: waitingLine.toString(),
  length: waitingLine.length,
  peek: waitingLine.peek(),
})
console.log("======================")}

persons.forEach(person => waitingLine.enqueue(person))
print();

for (let i = 0; i < 5; i++) {
  const removed = waitingLine.dequeue();
  console.log({removed})
  print();
}

