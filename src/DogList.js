import React from "react";

function DogList({ dogs }) {
  return (
      <div>

        {dogs.map((dog, idx) => (
          <div key={idx}>
            <p>{dog.name}</p>
            <img src={dog.src} alt={dog.name} />
          </div>
        ))}

      </div>
    );
}

export default DogList;