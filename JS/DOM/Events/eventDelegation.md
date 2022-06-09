# Event delegation
Delegates the events handler to the parent of a bunch of children:
> use event.target.closest === ".class" to determinate if the targe is child of the important class

## Event only for components

![](https://i.postimg.cc/mZCSnYqN/Screenshot-from-2022-06-07-10-10-14.png)

```js
document.body.addEventListener('click', event => {
  if(event.target.closest('.post')){
      console.log('is post child')
  }
})
```

only if we click inner a post the console.log is lunched.

## Event only for tags
```js
conteiner.addEventListener('click',(event)=>{
    if(event.target.tagName === "h2"){
        window.alert(hola);
    }
});
```

# Conclusion
its better delegate the listener to common parent because we can control the **Event Propagation**. If we add listeners for each element it couldn't be manage easily, because event propagation creates interferences when:

* body (with some event)
  * Post (with some event)
    * title (with some event)

click in the post and all the events would be lunched.

## Another example
```js

//log the text of all h1 h2 an h3 of the page:

document.addEventListener('click', (e) => {
  if(e.target.matches('h1,h2,h3'))
  console.log(e.target.innerText);
})

```