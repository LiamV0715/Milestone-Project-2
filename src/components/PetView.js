import React from "react";
const Comment = require('./components/Comment')
const pets = require('./controllers/pets_controller')

export default function PetView() {
  return (
    <main>
      <h2>This is the Pet View!</h2>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">All Pets</a>
          </li>
          <li>
            <a href="/addapet">New Pet</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}