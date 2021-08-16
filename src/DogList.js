import React from "react";

function DogList({ dogs }) {
  return (
      <div>
        <ul>
        {dogs.map((dog, idx) => (
          <li key={idx}>
            <p>{dog.name}</p>
            <img src={dog.src} alt={dog.name} />
          </li>
        ))}
        </ul>
      </div>
    );
}

export default DogList;