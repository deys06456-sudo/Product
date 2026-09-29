
const express = require('express');
const productController = require('../controller/product.controller.js');

const Router = express.Router();

// Temporary debug line: shows which methods really exist on the controller.
// Remove it once the error is fixed.
//console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(productController)));

Router.get(
    '/product', 
    productController.getProduct
);

Router.get(
    '/product/create', 
    productController.createProduct
);

Router.post(
    '/product/store', 
    productController.storeProduct
);

module.exports = Router;