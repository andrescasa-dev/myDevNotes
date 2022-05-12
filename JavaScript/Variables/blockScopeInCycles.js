function brakeCycle(){
  for (var i = 0; i < 5; i++) {
    console.log("====first===");
    console.log(`i: ${i}`);
    console.log("====second===");
    console.log(`j: ${j}`); // i can access to j, because it's leafing in the function scope.
    for (var j = 0; j < 3; j++) {
      console.log(j);
    }
  }
}

brakeCycle();

function brakeCycle(){
  for (let i = 0; i < 5; i++) {
    console.log("====first===");
    console.log(`i: ${i}`);
    console.log("====second===");
    console.log(`j: ${j}`); // i can't access to j, because it's only leafing in the block scope.
    for (let j = 0; j < 3; j++) {
      console.log(j);
    }
  }
}

brakeCycle();