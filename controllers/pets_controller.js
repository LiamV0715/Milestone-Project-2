// // // DEPENDENCIES
// const pets = require('express').Router()
// const db = require('../models')
// const { Pets } = db 
// const { Op } = require('sequelize')
// const { Sequelize } = require('sequelize')

// // FIND ALL PETS
// pets.get('/', async (req, res) => {
//     try {
//         const foundPets = await Pet.findAll({
//             where: {
//                 name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
//             }
//         })
//         res.status(200).json(foundPets)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// // FIND A SPECIFIC PET
// pets.get('/:id', async (req, res) => {
//     try {
//         const foundPets = await Pets.findOne({
//             where: { pet_id: req.params.id }
//         })
//         res.status(200).json(foundPets)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

// // CREATE A PET
// pets.post('/', async (req, res) => {
//     try {
//         const newPet = await Pets.create(req.body)
//         res.status(200).json({
//             message: 'Successfully inserted a new pet',
//             data: newPet
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // UPDATE A PET
// pets.put('/:id', async (req, res) => {
//     try {
//         const updatedPets = await Pet.update(req.body, {
//             where: {
//                 pet_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedPets} pet(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // DELETE A PET
// pets.delete('/:id', async (req, res) => {
//     try {
//         const deletedPets = await Pets.destroy({
//             where: {
//                 pet_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedPets} pet(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // EXPORT
// module.exports = pets


const express = require('express')
const pets = express.Router()
const Pet = require('../models/pets.js')

// Index:
pets.get('/', (req, res) => {
    pet.find()
        .then(foundPets => {
            res.json(foundPets)
        })
})

pets.get('/seed', (req, res) => {
    Pet.insertMany(
        [
            {
                "name": "english",
                "greeting": "Hello world",
                "pangram": "The quick brown fox jumps over the lazy dog",
                "filler": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },{
                "name": "spanish",
                "greeting": "Hola mundo",
                "pangram": "Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú"
            },{
                "name": "korean",
                "greeting": "세상아, 안녕",
                "pangram": "웬 초콜릿? 제가 원했던 건 뻥튀기 쬐끔과 의류예요. 얘야, 왜 또 불평?"
            },{
                "name": "swedish",
                "greeting": "Hej världen",
                "filler": "Löksås ipsum äng miljoner både varit inom äng mjuka ordningens, vid sitt söka jäst ska stora miljoner ska vi varit, åker äng brunsås träutensilierna rännil precis tre där."
            },{
                "name": "hindi",
                "greeting": "नमस्ते दुनिया",
                "pangram": "ऋषियों को सताने वाले दुष्ट राक्षसों के राजा रावण का सर्वनाश करने वाले विष्णुवतार भगवान श्रीराम, अयोध्या के महाराज दशरथ के बड़े सपुत्र थे।",
                "filler": "पेदा तरीके गुजरना स्वतंत्र सार्वजनिक जिम्मे अनुवाद दौरान पसंद दिये विश्व पुस्तक मुख्यतह भाति ध्वनि पहोचने तकनीकी उपलब्ध अधिकांश सोफ़्टवेर सहयोग भाषा दिये प्राण असक्षम विभाजनक्षमता पहोच। अर्थपुर्ण विश्वव्यापि ७हल विवरन अधिकार द्वारा कार्यलय भीयह प्रतिबध पुष्टिकर्ता विश्वव्यापि विकास जिवन सुनत जिम्मे ज्यादा अंग्रेजी वर्णन तकनिकल तकनीकी प्रव्रुति उन्हे सुना"
            }, {
                "name": "swahili",
                "greeting": "Salamu, dunia"
            }
        ]
    ).then(pets => {
            res.json({
                message: "Seed successful!"
            })
        })
})

// Show:
pets.put('/:name', (req, res) => {
    Pet.findOne({ name: req.params.name.toLowerCase() })
        .then(pet => {
            res.json(pet)
        })
})

module.exports = pets