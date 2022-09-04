# Post data throw a Rest API
for posting we need to set at least the next configuration in the fetch options:
1. Method
2. body: content
3. content Type.

be aware of data type that you are sending, some cases the data-set needs to be declare as well.

frontEnd ===(json)==> API ===> BackEnd
frontEnd ===> API <===(plain text) BackEnd

> the options are key sensitive so be careful

```js
async function postData(){
  const myObj = {
    name: 'andres',
    age: 19
  }
  const response = await fetch('http://someUtr',{
    method: 'POST'
    body: JSON.stringify(myObj)
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
```