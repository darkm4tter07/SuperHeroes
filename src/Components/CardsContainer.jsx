import React, { useEffect, useState } from "react";
import Card from "./Card";
import useCharacter from "./useCharacter";

function CardsContainer({searchText}) {
  const { data, loading, error } = useCharacter(
    `https://www.superheroapi.com/api.php/727054372039115/search/${searchText.split(" ").join("")}`,
    [searchText.split(" ").join("")]
  );
  if(data===undefined){
    return <h1 className="error">{error ? error.message : "Character Not Found!"}</h1>;
  }else if (data.length) {
    return (
      <div className="cards__container">
        {data.map((d) => (
          <Card
            key={d.id}
            name = {d.name}
            imageUrl = {d.image.url}
            cardKey={d.id}
            data={d}
          />
        ))}
      </div>
    );
  } else if (loading) {
    return <h1>Loading...</h1>;
  }
}

export default CardsContainer;
