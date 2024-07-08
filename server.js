// DEPENDENCIES
const { Sequelize } = require('sequelize');
// import './App.css'
const express = require("express");
const app = express();
// const db = require('./connect');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const bodyParser = require("body-parser");
const port = 5432;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

// CONTROLLERS  
const petsController = require('./controllers/pets_controller')
app.use('/pets', petsController)

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})
// app.get("/gallery", db.getPets);
// app.get("/gallery/:id", db.getPetById);
// app.put("/gallery/:id", db.updatePet);
// app.post("/gallery", db.createPet);
// app.delete("/gallery/:id", db.deletePet);

app.listen(port, () => {
    console.log("Server is running on " + port);
});