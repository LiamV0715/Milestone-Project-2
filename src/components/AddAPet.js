import React from 'react'

export default function AddAPet() {
  return (
    <main>
      <form>
        <div class="form-group">
          <label for="petName">Name</label>
          <input type="name" class="form-control" id="petName" aria-describedby="emailHelp" placeholder="Enter pet's name"></input>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="age" class="form-control" id="age" placeholder="Enter pet's age"></input>
        </div>
        <div class="form-group">
          <label for="weight">Weight</label>
          <input type="weight" class="form-control" id="weight" placeholder="Enter pet's weight"></input>
        </div>
        <div class="form-group">
          <label for="level">Level</label>
          <input type="level" class="form-control" id="level" placeholder="Enter pet's level"></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}