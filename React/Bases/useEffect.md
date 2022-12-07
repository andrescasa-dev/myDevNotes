# What is a side effect

# When React run effect

# When React doesn't run effect

# when use useEffect

# what is a memory leak

# How we can avoid memory leaks while using useEffect

# Dependency list
This array not is directed linked to refresh th variables inside my useEffect function, it only determines when the function should run
- useEffect(()=>{}): undefined: each render (always)
- [] => only first render
- [variableA, variableB]: whenever some variables in the array changes

It's important to have refreshed all the variables inside the function, so React will relaunch whenever some variables provided needs to refresh. it's like saying: "ey react re launch the effect function whenever one of this variables changes, so the function can update its lexical scope an therefore update all the variables inside of it.