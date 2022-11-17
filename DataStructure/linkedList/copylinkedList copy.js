  class LinkedList{
    constructor(){
      this.head = null;
      this.tail = this.head;
      this.length = 0
    }
    traverseTo(index){
      let pointer = this.head;
      if(index >= this.length) return null
      while(index !== 0 ){
        pointer = pointer.next
        index--;  
      }
      return pointer
    }
    
    insert(index, value){
      console.log(index)
      if(index > this.length) return this
      if(index === 0) return this.prepend(value)
      if(index === (this.length)) return this.append(value)
      
      const newNode = new Node(value)
      const prev = this.traverseTo(index-1);

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
      if(index > this.length) return this
      if(index === 0) return this.shift()
      if(index === (this.length - 1)) return this.pop()

      const prev = this.traverseTo(index-1);
      const current = prev.next

      prev.next = current.next;
      current.next = null
      this.length--
      return current.value;
    }

    shift(){
      const current = this.head
      this.head = this.head.next
      current.next = null
      this.length--
      return current.value
    }

    pop(){
      const prev = this.traverseTo(this.length-2);
      const deleted = this.tail
      prev.next = null;
      this.tail = prev
      this.length--
      return deleted.value;
    }

    reverse(){
      if(this.length < 2) return this

      let prev = null
      let current = this.head
      let next = current;

      while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }

      [this.head, this.tail] = [this.tail, this.head];
      
      return this
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

  const arr = []
  const linkedList = new LinkedList();
  arr.forEach(em => linkedList.append(em))
  console.log(linkedList.toString(), {length: linkedList.length})
  console.log(linkedList.reverse().toString(), {length: linkedList.length, head: linkedList.head?.value, tail: linkedList.tail?.value})


