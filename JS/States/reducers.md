# Reducer
functions made for manipulate the state.

```js
const state = {
  name: 'andres',
  email: 'andrescasa.dev@gmail.com'
}

function counterUser(state, action) {
  switch (action.type) {
    case 'CHANGE_EMAIL': 
      return {...state, email: action.payload.email}
    case 'CHANGE_NAME':
      return {...state, name: action.payload.name}
    default:
      return state;
  }
}

console.log('state: ' + JSON.stringify(state));
counterUser(state, {type: 'CHANGE_EMAIL', payload:{ email: 'other@gmail.com'}}); //return a new state
counterUser(state, {type: 'CHANGE_NAME', payload:{ name: 'Camilo'}}); //return a new state
```