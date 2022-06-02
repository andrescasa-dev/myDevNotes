# Classes
its a way to create objects in demand, also used for share behavior through the objects.

# Constructor function
It's a "convention function" where we create a object with its initial parameters.
> All the function in JS are objects
 * Ist not attached to eny class
 * Called with the new operator.
 * Named function
  
for creating an instance of eny object, "new" operator must be used.
```js
function Student(id, name, subjects) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

let myStudent = new Student(1, "Reed", ["Maths", "Code"])
console.log(myStudent);
```

# Adding methods
the prototype parameter must be used.

```js
function Student(id, name, subjects) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

Student.prototype.addSubjects = function(subject){
  this.subject = [...this.subjects, subject];
}
```

> you can't declare properties using prototype property directly, you should use setFunction

# when tou use it? 
Use constructor to establish a blueprint of unique properties and methods for all the instances.

# ¿Why not declare methods in the constructor function?
its unnecessary to have all method in each instance. Thats that we got declaring methods in the constructor, its better use to prototype, because in that way the methods are unique and are only once in memory.

![](https://i.imgur.com/FzQMMfU.png)