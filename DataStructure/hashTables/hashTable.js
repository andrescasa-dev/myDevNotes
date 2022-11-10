class HashTable{
  constructor(size){
    this.data = new Array(size)
    console.log({size})
  }
  
  //lazy implementation of hash function, just for educational purposes
  getHash(key){
    const hash = key.split('').reduce((hash,char,i)=>{
      return(hash + char.charCodeAt(0) * i) % this.data.length
    },0)
    return hash
  }
  // "apple" : 20 => hash: 123
  // "apple" : 30
  add(key, value){
    const direction = this.getHash(key)
    if(!this.data[direction] || this.data[direction].key == key )
      this.data[direction] = { key, value }
    else{
      this.data[direction].next = { key, value}
    }
    console.log({key, direction})
  }

  get(key){
    const hash = this.getHash(key)
    let pair = this.data[hash]
    if(pair){
      while (pair.key !== key){
        pair = pair.next;
      }
      return pair.value
    }    
      return undefined
  }
}

const myTable = new HashTable(2);
myTable.add("oranges", 100)
myTable.add("orangess", 100)
myTable.add("orangesss", 100)
const keys = [{oranges: myTable.get("oranges")}, {orangesss: myTable.get("orangesss")}]
console.log({data: JSON.stringify(myTable.data), keys})