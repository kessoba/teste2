import React from 'react'

export default function Fruit(props) {
// state

// comportement
// render
  return (
    <div>
          <li >
            {props.fruitInfo.nom}<button onClick={() => props.fruitDelete(props.fruitInfo.id)}>X</button>    </li>
    </div>
  )
}
