# How works under the hood
**how react manage the state. hwo react render things??**


# Shallow comparison
compare the top level properties of two or more objects

```js
const obj1 = {
    name:"andres"
  }
const obj2 = {
    name:"andres"
  }
```
shallow comparison of obj1 and obj2 is **true**

```js
const obj1 = {
    name:"andres", 
    courses:{institution: "scimba"} //its an object, comparison: reference === reference2
  }
const obj2 = {
    name:"andres", 
    courses:{institution: "scimba"}
  }

```
shallow comparison of obj1 and obj2 is **false**

> each prop in the top level is compare using "===", prop1 === prop2.

# Optimization problems
as we know react will rerender all the children component of a parent as a default behavior, it means that if come child component that didn't change at all will render as well. so the key is compare if the props an the state are the same in our virtual DOM, if is so, don't rerender in order to prevent this behavior we have the next solution:


# shouldRenderComponent (not often used)
its a method of class components that receive next props and state an let us decide if that component should render.

the idea is make a shallow compare between nextProps and nextState to the current wants.

### return values
if we return...
false: it doesn't will render
true: it will render

# PureComponent
its a build in component that implements a **shouldRenderComponent method**, we don't want to write it any more

we only have to extend from it:
```js
class myComponent extends React.PureComponent{
  ...
}
```

# memo
is the same concept of PureComponent but in function component. a build in function component.

Also, we can define a "areEqual" callback to the function in order to customize how we want to compare the current props to the next props (it doesn't consider the state like in shouldRenderComponent method)

```js
function myComponent (props){
  return //some jsx
}
import default React.memo(myComponent);
```