const express = require('express');
const ProductController = require('./controllers/ProductController');
const routes = express.Router();

// route defalut
routes.get('/products', ProductController.index);

//route show product for id
routes.get('/products/:id', ProductController.show);

//route update product for id
routes.put('/products/:id', ProductController.update);

//route for create elements
routes.post('/products', ProductController.store);

//route for delete product
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;