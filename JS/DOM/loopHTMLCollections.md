# Loop in HTML collection

HTMLCollection is an iterable object so, to can use for loop normally and access to the items with the [] syntax.

## Example
```js
//characters = []
//omCharacters = HtmlCollection
characters.forEach( (character, i) => domCharacters[i].innerHTML = character.getInnerHtml())
```