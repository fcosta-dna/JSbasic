const mongoose = require('mongoose');


//selec from ProdutSchema
const Product = mongoose.model('Product');

module.exports = {

    //show products from db
    async index(req, res){
        const {page = 1} = req.query;
        const products = await Product.paginate({}, {page, limit: 10});

        return res.json(products);
    },

    //function for show product by id
    async show(req, res){
        const product = await Product.findById(req.params.id);
        
        return res.json(product)
    
    },
    
    //function for create the product in db
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);

    },

    //function for update product in db by id
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product)

    },

    //function for delete product in db by id
    async destroy(req, res){
        const product = await Product.findByIdAndDelete(req.params.id);

        return res.send();

    }
}