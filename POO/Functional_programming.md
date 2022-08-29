# State
storage of current important data of the app that affects in the behavior of the app.

is the status or the visual representation of important data in the app. For example. An important variable si "loginUser = true/false", depending on the value the app will change visually for the user.

# Must easy to read
Because the status affects how the app works others developers must know what is going on with the state. It shouldn't be spread out.

# Question?
-why update immutably the states?
```js
this.status.user = true;
```
must be:
```js
this.status = {...this.status, user: true};
```