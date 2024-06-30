// DEPENDENCIES
const express = require('express')
const app = express()
// <<<<<<< compenent-skeleton
import React from 'react';
// const { Sequelize } = require('sequelize')
// // const pets = require('./controllers/pets_controller')
// const petView = require ('./components/PetView')
// const AddAPet = require ('./components/AddAPet')
// const Home = require ('./components/Home')
// const Comment = require ('./components/Comment')
// const Gallery = require ('./components/Gallery')
// const GalleryItem = require ('./components/GalleryItem')
// =======
// >>>>>>> main

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// <<<<<<< compenent-skeleton
//added .env file with port 3000


// =======
// >>>>>>> main

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
// <<<<<<< compenent-skeleton
        message: 'Welcome to the Pet Zone'
    })
})


// // CONTROLLERS  
// const PetsController = require('./controllers/pets_controller')
// app.use('/pets', bandsController) //the pets here will be Andi's model
// =======
        message: 'Welcome to the Pets App'
    })
})

// CONTROLLERS  
// >>>>>>> main

// LISTEN
app.listen(process.env.PORT, () => {
    console.log("Pets are cool")
})