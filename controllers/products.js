const express = require("express");
const Product = require("../models/products");

const ProductRouter = express.Router();

ProductRouter.post('/', (req, res, next) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(next);
})

ProductRouter.get("/", (req, res, next) => {
    Product.find({})
    .then((products) => res.json(products))
    .catch(next);
});

ProductRouter.get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(next);
})

ProductRouter.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const body = req.body;
    Product.findOneAndUpdate({_id: id}, body, {new: true})
    .then(product => res.json(product))
    .catch(next);
})

ProductRouter.delete('/:id', (req, res, next) => {
    Product.findOneAndDelete({_id: req.params.id})
    .then(product => res.json(product))
    .catch(next)
})

module.exports = ProductRouter;