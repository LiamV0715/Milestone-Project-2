// // DEPENDENCIES
const pets = require('express').Router()
const db = require('../components')
const { Pets } = db 
const { Op } = require('sequelize')
const { Sequelize } = require('sequelize')

// FIND ALL PETS
pets.get('/', async (req, res) => {
    try {
        const foundPets = await Pet.findAll({
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundPets)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC PET
pets.get('/:id', async (req, res) => {
    try {
        const foundPets = await Pets.findOne({
            where: { pet_id: req.params.id }
        })
        res.status(200).json(foundPets)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A PET
pets.post('/', async (req, res) => {
    try {
        const newPet = await Pets.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new pet',
            data: newPet
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A PET
pets.put('/:id', async (req, res) => {
    try {
        const updatedPets = await Pet.update(req.body, {
            where: {
                pet_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A PET
pets.delete('/:id', async (req, res) => {
    try {
        const deletedPets = await Pets.destroy({
            where: {
                pet_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedPets} pet(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = pets