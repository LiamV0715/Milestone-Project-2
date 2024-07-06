const express = require('express')
const pets = express.Router()
const Pets = require('../models/pets.js')

// INDEX
pets.get('/gallery', (req, res) => {
    res.render('Index',
        {
            pets: Pets,
            title: "My Index Page"
        }
    )
})

// NEW
pets.get('/addapet', (req, res) => {
    res.render('new')
})

// EDIT
pets.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
        pets: Pets[req.params.indexArray],
        index: req.params.indexArray
    })
})

// SHOW
pets.get('/:arrayIndex', (req, res) => {
    if (Pets[req.params.arrayIndex]) {
        res.render('Show', {
            pets: Pets[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('404')
    }
})

// CREATE
pets.post('/addapet', (req, res) => {
    Pets.push(req.body)
    res.redirect('/gallery')
})

// DELETE
pets.delete('/:indexArray', (req, res) => {
    Pets.splice(req.params.indexArray, 1)
    res.status(303).redirect('/gallery')
})

module.exports = pets