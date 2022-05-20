
const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
  verified: true 
};

const newUser = {
  username: "ReedBarger",
  email: "reed@gmail.com",
  password: "mypassword"  
};

// i want to get the user properties, overwrite them with "newUser" and add a new property verified as false.

//=====the New way=====//
const createdUser = {...user, ...newUser, verified: false};

//=====the Old way=====//
const createdUserOld = Object.assign({},user, newUser, {verified: false});
//this method merge properties from a source objects to a target object (the first argument).
//In order to don't mutate the original user we pass a empty object, where there is going to be all the properties.