# React inLine styles
all native tags in JSX has the property "style" for the inline style.
we just have to consider two things:
1. style prop receive an object
2. that object replace the kebab-case (css native) with the camelCase(JSON) syntax

```js
const styles={
  backgroundColor: "black";
  border: "3px solid blue"
}

return (
    <div style={styles}> </div>
)
```