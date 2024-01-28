import React from "react";
import useCharacter from "./useCharacter";
import "../css/Card.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cardClickHandler } from "../features/Character";

function Card({ name, imageUrl, cardKey, data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const powerstats = {
    name: data.powerstats.name,
    intelligence: data.powerstats.intelligence,
    strength: data.powerstats.strength,
    speed: data.powerstats.speed,
    durability: data.powerstats.durability,
    power: data.powerstats.power,
    combat: data.powerstats.combat,
  };
  const handleCilck = () => {
    dispatch(cardClickHandler(powerstats));
    navigate(`/card/${name}`);
  };
  
  return (
    <div onClick={handleCilck} className="image-card" key={cardKey}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
export default Card;