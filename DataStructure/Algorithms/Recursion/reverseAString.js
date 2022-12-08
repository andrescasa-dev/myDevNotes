//lets
function reverseAString(str) {
  if (str.length === 1) return str //s
  return str[str.length - 1] + reverseAString(str.slice(0, -1))
}

console.log(reverseAString("lets"))


function simpleReverse(str) {
  let reverse = ""
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}

console.log(simpleReverse("lets"))