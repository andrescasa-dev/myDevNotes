## Ejemplo optimizado
``` js
const nodes = [];
for(let i = 0; i < 100; i++){
    const node_new = document.createElement('input');
    nodes.push(node_new);
}
document.body.appen(...nodes)
```
El ciclo crea un elemento y lo agrega a un arra "nodes", esto se repite 100 veces. Luego, se agrega al DOM los 100 elementos con un solo append
nota:Se usa el spread operator para enviar las 100 posiciones del array, de lo contrario se tendría que haber utilizado. "no tenga en cuenta que es un arreglo solo pase los elementos que hay en él"

``` js
document.body.appen(nodes[0],node[1],node[2]...)
```

# Document Fragment    
```js
var list = document.querySelector('#list')
var fruits = ['Apple', 'Orange', 'Banana', 'Melon']

var fragment = new DocumentFragment()

fruits.forEach(function (fruit) {
  var li = document.createElement('li')
  li.textContent = fruit
  fragment.appendChild(li)
})

list.appendChild(fragment)
```