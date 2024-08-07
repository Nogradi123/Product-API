const router = require('express').Router();
const controller = require('./product.controller');

router.get("/product/:id", controller.getById, () => {
    // #swagger.tags = ["Products"]
    // #swagger.description = "Retieve products by ID"
});

router.get("/products", controller.getAll, () => {
    /* 
        #swagger.autoQuery = false
        #swagger.tags = ["Products"]
        #swagger.description = "Retrieve All products"
        #swagger.parameters['limit'] = {
            in:'query',
            descritpion: 'Limit the number of products that will be displayed!!!!!!',
            required: false,
            type: 'number'
        } 
        #swagger.parameters['skip'] = {
            in:'query',
            descritpion: 'Skip the number of products displayed',
            required: false,
            type: 'number'
        }
        #swagger.parameter['searchString'] = {
            in: 'query',
            description: 'Search',
            required: false,
            type: 'number
        }
    */
});

module.exports = router;