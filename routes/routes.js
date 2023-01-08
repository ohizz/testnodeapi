const express = require('express');
const router = express.Router();
const Model = require('../models/models');

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        brand: req.body.brand,
        name: req.body.name,
        image: req.body.image,
        price:req.body.price,
        year: req.body.year
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})


router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;