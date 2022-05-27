# Element is a kind of node

I had this:
```html 
<body>
  <!-- comment -->
  <p>myP</P>
</body>
```
the elements and nodes are the next: 
## Element
Just HTML tags
`<body><p>myP</P></body>`
`<p>myP</P>`

## Node
all written in the HTML document
node: `body`
    children: 
      node:`comment`
      node:`<p>`
        children: `myP` 


