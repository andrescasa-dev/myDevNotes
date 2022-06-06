# Shorter constructor
`Object.assign(this, myData)` must be used in the constructor.

## example:
```js
 const userData = {
	name: 'Sandra Kaye',
	portfolio: 'www.sandrasportfolio.com',
	currentJob: 'Google',
	currentSalary: '400k'	
}

class User {
  constructor(data){
    Object.assign(this, data);
  }

  summarize(){
    console.log(`${this.name}'s porfolio is at ${this.portfolio} and they work at ${this.currentJob}. Their current salary is ${this.currentSalary}.`)
  }
}

let myUser = new User(userData);
myUser.summarize();
```

# Private problem
we can't stablish getter and setter because Object.Assign creates variables without "_varName" prefix

but it can't be change with the "private first" approach, using a utility function:
```js
function privateProperties(obj){
  const copy = {}
  debugger;
  for (const prop in obj) {
    copy[`_${prop}`] = obj[prop];
  }
  return copy;
}

//code

let myUser = new User(privateProperties(userData));
```