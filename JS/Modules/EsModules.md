# CommonJS
use `import / export`

# just export
For named method and variables

# default and export
Used for export a default variable or method.

we can change the name of a default method or export in the import, since "default" key word only export the value in the variable not the whole variable.

> only one default for each module

```js
const characterData = {
    hero: {
        elementId: "hero",
        name: "Wizard",
        avatar: "images/wizard.png",
        health: 60,
        diceCount: 3
    },
    monster: {
        elementId: "monster",
        name: "Orc",
        avatar: "images/orc.png",
        health: 10,
        diceCount: 1
    }
}

export default characterData
```
```js
import charData from './data.js'
```