# It's not HTML
jsx block of code are more like functions they return a JSON which have information about the node.

```js
  const element = <h1 className="text-blue-400 font-sans text-3xl bold">Hi, world</h1>
  console.log(element)
```

it will return: 

```json
{
  "type": "h1",
  "key": null,
  "ref": null,
  "props": {
    "className": "text-blue-400 font-sans text-3xl bold",
    "children": "Hi, world"
  },
  "_owner": null,
  "_store": {}
}
```
> we don't use "class" we use "className" because class is reserved word of JS

## so how render elements? 
we don't explicit render elements, React is declarative, Its enough passing the element(JSON) to the render function.

```js
root.render(element);  
```

> !important: the example above it's not creating components for agility purposes.