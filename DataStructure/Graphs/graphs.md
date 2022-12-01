# Graphs
a graph is build with nodes and its relationships

# tree
a tree is actually a graph but with a rule: the parent(1) => child(1+).

# important concepts

## direction

## weight 

## cyclic

# how to create a graph
![img](https://i.postimg.cc/wBKqPdts/Screenshot-from-2022-11-29-15-58-15.png)
## Edge list
register all the edges (or combinations of nodes).

```js
//       edge  edge  edge  edge
edges= [[0,2],[2,1],[2,3],[3,1]]
//        0     1     2      3
```

## Adjacent list
using a key value structure save the value of the node (key) and its edges (value)

```js
connections= {
  //value: edges
    0: [2], 
    1: [2,3],
    2: [0,1,3],
    3: [2,1]
  }
```

## Adjacent matrix
it represent in a matrix the edges using 1 or 0.

```js
edges=[
// 0 1 2 3
  [0,0,1,0], //0 => 2
  [0,0,1,1], //1 => 2,3
  [1,1,0,1], //2 => 0,1,3
  [0,1,1,0], //3 => 1,2
]
```

![img](https://i.postimg.cc/mrnBWf6s/Screenshot-from-2022-11-29-16-12-21.png)
