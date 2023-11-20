import React from 'react'
import { useState } from "react";

export default function FruitForm({handleAdd}) {
  // state
  const[nouveauFruit,setNouveauFruit] = useState('');

  // comportement
  const entrerForm = (event) =>{
    event.preventDefault()
  
  const id = new Date().getTime();
  const nom = nouveauFruit
  const fruitAjouter = {id, nom}
  handleAdd(fruitAjouter)
  // fruitCopy.push(fruitAjouter)
  // setFruits(fruitCopy)
  setNouveauFruit('')

   };
   const chengement = (event) =>{
    const afterchenge = event.target.value
    setNouveauFruit(afterchenge)
  };
  // render
  return (
    <form action="submit" onSubmit={entrerForm}> 
        <input type="text" onChange={chengement} value={nouveauFruit} placeholder="Ajouter un texte"/> 
        <button>Entrer</button> 

      </form>
  )
}
