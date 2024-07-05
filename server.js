const express = require('express')
const app = express()
const port = 3001
// const Sequelize = require('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CONTROLLERS  
const petsController = require('./controllers/pets_controller')
app.use('/pets', petsController)

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the pet zone')
})

// LISTEN
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

