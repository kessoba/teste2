
import React, { useState } from "react";
import Fruit from "./component/fruit";
import FruitForm from "./component/fruitForm";
 export default function App () {
    // state
  const [fruits, setFruits] = useState([
    {id:1,nom:'abricot'},
    {id:2,nom:'banane'},
    {id:3,nom:'pomme'}

  ]);

  // comportement
  //    BOUTTON SUPPRIME debut
      const bouttonSup = (id) => {
        console.log(bouttonSup)
      //  copier le state
      const fruitCopy = [...fruits]
      // manipuler le state
     const fruitCopyUpdated = fruitCopy.filter( (fruit) =>fruit.id != id )
    //  modifier le state
    setFruits(fruitCopyUpdated)
      }; 
   //    BOUTTON SUPPRIME fin
  //  BOUTTON ENVOI FORMULAIR debut
    
  //  BOUTTON ENVOI FORMULAIR fin
  //  saisie input debut
 
  //  saisie input fin

const handleAdd = (fruitAjouter)=>{
  const fruitCopy = [...fruits]
  fruitCopy.push(fruitAjouter)
    setFruits(fruitCopy)

}
  // render
  return  <div>
        <h1>Listes des fruits</h1>
        <ul>
        {fruits.map((fruit) =>{
       return <Fruit fruitInfo ={fruit} fruitDelete={bouttonSup} key={fruit.id} /> //  <li key={fruit.id}>{fruit.nom}<button onClick={() => bouttonSup(fruit.id)}>X</button>    </li> 
        })}
        </ul>
        <FruitForm   handleAdd={handleAdd} />
        

  
    </div>
   
};