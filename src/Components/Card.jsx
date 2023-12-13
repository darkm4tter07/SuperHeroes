import React from "react";
import useCharacter from "./useCharacter";

function Card({name, imageUrl, cardKey}) {
  return(
    <div className="card" key={cardKey}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  )
  
}

export default Card;
