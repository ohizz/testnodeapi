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
        color:req.body.color,
        year: req.body.year
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;