# classList.remove()
remove a class using the class name not as a selector

# classList.add();
add a class using the class name not as a selector

# classList.toggle();

```html
<tag> => toggle: true => <tag class="a">
```

```html
<tag class="a"> => toggle: false => <tag>
```

```js
if(node.classList.toggle('a')){
  console.log("active")
}
else{
  console.log("off")
}
```