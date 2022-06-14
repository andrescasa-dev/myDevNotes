# Fetch

API => myjS => fetch() => Response => DATA

It's up to fetch the interaction between de api and my program. Fetch use http methods.

> fetch don't throw eny error, so we have to handle it manually.

So, for the actual data I can access to the body of the response (just using .json()) or even the status of the response, among other things.

# fetch function
see fetch() in mdn
> the default http method is get

## with promises

```js 
const rootUrl = 'https://jsonplaceholder.typicode.com';
fetch(`${rootUrl}/posts`,{
  method: 'POST',
  head:{
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(blogPost);
})
  .then(response => response.json())
  .then(data => console.log(data));
```

## Handling errors
fetch don't throw eny error, so we have to handle it manually.

```js
fetch(`${rootUrl}/posts`)
  .then(response =>{
    if(!response.ok){
      throw new Error(response.status)
    }
  })
```
* response.ok Read only property its boolean if response status is between 200-299
* response.status its says what happens with the petition, if there is an error this property tell us, through http status codes.
