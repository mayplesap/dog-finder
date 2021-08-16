import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();

  let dog = //TODO:something;
  return (
    <div>
      <h1>{name}</h1>
      <p>{dog.age}</p>
      <img src={dog.src} alt={name} />
      {dog.facts.map(fact => (
        <p>{fact}</p>
      ))}
    </div>
  );
}

export default DogDetails;