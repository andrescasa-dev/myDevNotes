# Props
its the data used for create an specific component
  - let us create components dynamically
  - its a object
  - props are readOnly

list of items (JSON) => List of components 

is the equivalent of what i was doing in vanilla JS:
```js
cardList.map(myCard => carComponent(myCard))
``` 
**myCard** is the Prop


## setting props
we set props like using HTML attributes

```js
<sayHi firstName="Andrés" lastName="Castellanos">
```

the props argument will be:
```js
const props = {
  firstName: 'Andrés',
  lastName: 'Castellanos',
}
```
## using the props object
we use "{}" in order to write JS code in JSX syntax

```js
function sayHi(props){
  return <h1>hi {props.firstName} {props.lastName}</h1>
}
```
we can use whatever JS code.

```js
function sayHi(props){
  return <h1>hi {console.log("debug")} {alert("hola")}</h1>
}
```

## creating components using an arrays

```js
const personList = [{name:"andres", age:19} , {name:"gaia", age:17}]

function App(){
  const persons = personList.map((personInArr, i) => <Person {...personInArr} id={i} />)
  return(
    <div className="personWrapper">
      {persons}
    </div>
  )
}
```
the attributes are being passing using a object destructure.
```js
<Person {...personInArr}
```
JSX syntax transform the object like (name:"andres") into HTML like.

```js
<Person name = "andres" age = "19"
```
```js
function person(props){
  const {name, age, id} = props
  return(
    <div key={id}>
      <h1>{name}</h1>
      <h3>{age}</h1>
    </div>
  )
}
```
> the all components should have a key in order to be correct identify.