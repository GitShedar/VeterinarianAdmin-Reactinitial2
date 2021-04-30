import React from 'react';
import Pets from "./Pets";
import { v4 as uuidv4 } from "uuid";

const Client = ({item}) => {

  console.log(item.pets)

  return (
    <div className="Client">
      <h2>{item.name}</h2>
      <p>
        {item.pets.map(pet => <Pets key={uuidv4()} pet={pet}/>)}</p>
    </div>
  )
}

export default Client
