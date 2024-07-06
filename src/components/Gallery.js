import React, { useState, useEffect } from "react";


const Gallery = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("postgres://localhost:5432/pets")
      .then((response) => response.json())
      .then((data) => setNames(data))
      console.log(names)
      .catch((error) => console.error("Error fetching names:", error));
  }, []);

  return (
    <div>
      <h1>Name List</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
