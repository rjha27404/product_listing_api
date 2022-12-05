const express = require('express');
const router = express.Router();
const Model = require('../model/products');

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        product_id: req.body.product_id,
        sku: req.body.sku,
        name: req.body.name,
        price: req.body.price,
        color: req.body.color,
        product_type: req.body.product_type,
        product_image: req.body.product_image
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all data sorted by price and new
router.get('/getAll', async (req, res) => {
    try {
        const sortCondition = { price: 1, createdAt: 1, updatedAt: -1 };
        const data = await Model.find().sort(sortCondition);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// filter products
router.get('/filter', async (req, res) => {
    try {
        // create filter condition
        const Filtercondition = {};
        // price is present 
        if (req.query.price) {
            Filtercondition.price={};
            // if price range is mentioned like 1000-2000 split on -
            if (req.query.price.includes("-")){
                
                Filtercondition.price.$gte = req.query.price.split("-")[0];
                Filtercondition.price.$lte = req.query.price.split("-")[1];
            }
            else{
                // withour range
                Filtercondition.price = req.query.price;
            }
                
        }
        // if color is present
        if (req.query.color) {
            Filtercondition.color = req.query.color;
        }
        // if product_type is present
        if (req.query.product_type) {
            Filtercondition.product_type = req.query.product_type;
        }
        // filter data from database
        const FilterData = await Model.find(Filtercondition);
        res.status(200).json(FilterData);
        
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;