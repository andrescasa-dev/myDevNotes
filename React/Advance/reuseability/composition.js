//make a killer robot dog

const darker = (state)=>{
  return {dark: () => console.log(`${state.name} can dark`)}
}

const killer = (state)=>{
  return ({kill: (victim) => {
      victim.isAlive = false
      console.log(`${state.name} killed ${victim.name}`)
    }
  })
}

const driver = (state) => {
  const {position, speed} = state //private variables
  const sum = (a,b) => a + b //private methods

  return ({dive: () =>{
      state.position = sum(speed, position);
      console.log(`${state.name} has move from ${position} to ${state.position}`)
    } 
  })
}

const killerRobotDog = (name)=>{
  let state = {
    name,  
    speed: 100,
    position: 0,
  }

  return {
    ...driver(state),
    ...killer(state),
    ...darker(state)
  }
}

const rat = () => {
  let state = {
    name: "jerry the rat"
  }
  return state
}


const Robin = killerRobotDog("Robin"); // this is like: const robin = new KillerRobotDog("Robin")
const Jerry = rat();
Robin.dark()
Robin.dive()  
Robin.kill(Jerry)
console.log(Robin)


