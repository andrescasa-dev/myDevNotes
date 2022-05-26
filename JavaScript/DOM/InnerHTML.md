# Parse String to HTML in JS
use innerHTML property

```js
document.getElementById('orc').innerHTML = 
`<div class="character-card">
  <h4 class="name"> Orc </h4>
  <img class="avatar" src="https://images.unsplash.com/photo-1580321187070-da8bdee36013?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764"/>
  <p class="health">health: <b> 10 </b></p>
  <div class="dice-container"><div class="dice"> 4 </div></div>
</div>
`
```