const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require('./connect');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

// CONTROLLERS  
const petsController = require('./controllers/pets_controller')
app.use('/gallery', petsController)

app.get("/", (request, response) => {
    response.json({
        info: 'Hello world!'
    });
})
app.get("/gallery", db.getPets);
app.get("/gallery/:id", db.getPetById);
app.put("/gallery/:id", db.updatePet);
app.post("/gallery", db.createPet);
app.delete("/gallery/:id", db.deletePet);

app.listen(port, () => {
    console.log("Server is running on " + port);
});