# dotEnv
its a way to store secrete api keys in the environment.

## npm extension
[dotEnv](https://www.npmjs.com/package/dotenv) its an extension that let us use an object call "env" into the node global variable **process** 

```js
require('dotenv').config()
console.log(process.env) //print all the environment variables.
```

> as that is a npm dependency in order to execute correctly in the user side a packer (like webpack) its needed

## .env
file with all used env variables 

## .env_example
it's like a file template for the variables needed. only contains the variables names.
