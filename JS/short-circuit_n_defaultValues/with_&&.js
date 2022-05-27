// && operators return the first falsy value
const isRegister = true;
const hasVerifyEmail = true;
const response = 'Andrés'

//set the response value as long as is register and has verify email,
//set a default value as "guest"
const username = isRegister && hasVerifyEmail && response || 'Guest'
console.log(username)

//its important to know that the && > ||, i mean && has bigger precedence that ||
true || false && false           // returns true
true && (false || false)         // returns false
