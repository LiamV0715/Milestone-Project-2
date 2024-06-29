//Feel free to comment any of this out! extremely temporary
//and guaranteed to be refactored later

// DEPENDENCIES
const stages = require('express').Router()
const db = require('../components')
const { Pets } = db 
const { Op } = require('sequelize')

// FIND ALL STAGES
pets.get('/', async (req, res) => {
    try {
        const foundPets = await Pet.findAll({
            where: {
                stage_name: { [Op.like]: `%${req.query.pet_name ? req.query.pet_name : ''}%` }
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
        const foundStage = await Stage.findOne({
            where: { stage_id: req.params.id }
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A STAGE
stages.post('/', async (req, res) => {
    try {
        const newPet = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new pet',
            data: newPet
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A STAGE
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
        const deletedPets = await Stage.destroy({
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