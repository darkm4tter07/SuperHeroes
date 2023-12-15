import React from "react";
import useCharacter from "./useCharacter";
import '../css/Card.css'
import { useNavigate } from "react-router-dom";

function Card({name, imageUrl, cardKey}) {
  const navigate = useNavigate();
  const handleCilck = () => {
    navigate(`/card/${cardKey}`);
  };
  return(
    <div onClick={handleCilck} className="image-card" key={cardKey}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  )
  
}
export default Card;
