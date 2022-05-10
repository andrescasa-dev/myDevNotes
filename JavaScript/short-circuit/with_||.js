// the operator || return the value of the first truthy value.
const defaultValue = "Guest";
const isRegistered = false;

const username = isRegistered || "Guest";//value: "Guest"
//as "something" is truthy, at least that value it's going to be return,

//so it could be use for default values, but in a wide way. There is a way more restricted.

const usernameDefRestricted = isRegistered ?? "guest" //value: false;
// the nullish operator only consider 'undefined' or 'null' values