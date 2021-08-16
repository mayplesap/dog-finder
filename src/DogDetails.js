import React from "react";
import { useParams } from "react-router-dom";
import {Redirect } from "react-router-dom";
function DogDetails({ dogs }) {
  const { name } = useParams();
  let dog = dogs.filter( (dog) => (dog.name.toLowerCase() === name))[0];

  if (!dog) return  <Redirect to="/dogs" />

  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={name} />
        <h3> Facts!!!! </h3>
      {dog.facts.map(fact => (
        <p>{fact}</p>
      ))}
    </div>
  );
}

export default DogDetails;