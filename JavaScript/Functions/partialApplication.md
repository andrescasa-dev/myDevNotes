# Partial Application and single responsibility
it can be only apply in higher order functions.

it's the practice of let reuse a function for some (or each) parameters. therefore, if you need the execute a function multiple time with the same arguments, you can create a closure to avoid that repetition.

Doing that you execute the function for each functionality in the high order function.

## without using partial applications
```js
function fetchData (baseURL, route, callback){
  fetch(`${baseURL}${route}`)
    .then(response => response.json())
    .then(data => callback(data));
}

fetchData('https://jsonplaceholder.typicode.com','/comments', posts => posts.forEach(post => console.log(post.id)));
fetchData('https://jsonplaceholder.typicode.com','/comments', posts => posts.forEach(post => console.log(post.name)));
fetchData('https://jsonplaceholder.typicode.com','/comments', posts => posts.forEach(post => console.log(post.email)));
fetchData('https://jsonplaceholder.typicode.com','/posts', posts => posts.forEach(post => console.log(post.id)));
fetchData('https://jsonplaceholder.typicode.com','/posts', posts => posts.forEach(post => console.log(post.title)));
fetchData('https://jsonplaceholder.typicode.com','/posts', posts => posts.forEach(post => console.log(post.body)));
```

## using partial applications
```js
//higher order function for fetch
const fetchData = baseURL => route => callback => 
                  fetch(`${baseURL}${route}`)
                    .then(response => response.json())
                    .then(data => callback(data));

//Fist fetchPost and Comments then (in the callback) print the properties needed

const getSocialMediaData = fetchData('https://jsonplaceholder.typicode.com'); //only fetch data
//only get post
const postsFetched = getSocialMediaData('/posts'); 
//only get comments
const commentsFetched = getSocialMediaData('/comments'); 

// print for comments: id, name, email,
// print for posts: id, title, body  

//higher order function for print some properties of a object list
const printProperties = properties => objectList => 
    properties.forEach(
      property => {
          console.log(`======================================${property}======================================`)
          objectList.forEach(object => console.log(object[property]));
        } 
      );

// commentsFetched(printProperties(['id','name','email']));
// postsFetched(printProperties(['id','title','body']));

//if i want to print id in others sections...
const printId = printProperties(['id']);
const applyAll = (closureList, callback) => closureList.forEach( closure => closure(callback));
const fetchedSections = [postsFetched, commentsFetched]
applyAll(fetchedSections, printId) //print id to all sections.
```
* it's easier to read.
* The code it's reusable.