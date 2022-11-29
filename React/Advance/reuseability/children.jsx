import React from 'react'

export function CosmosSystem({children, count}){
  const elements = []
  for (let i = 0; i < count; i++) {
    elements.push(children(i))
  }

  return (
    <div className='cosmosSystem'>
      {elements}
    </div>
  )
}

// a function could be a children
export function App(){
  return (
    <div>
      <CosmosSystem shape="circle" count="5">
        {(i) => <Star key={i}/>}
      </CosmosSystem>

      <CosmosSystem shape="square" count="10">
        {(i) => <Planet key={i}/>}
      </CosmosSystem>
    </div>
  )
}
//let us create cosmos systems with personalize count of items and personalize type of children