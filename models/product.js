const mongoose = require('../db/connection')

const ProductSchema = new mongoose.Schema({
  brand: String,
  title: String,
  category: String,
  price: Number,
  description: String,
  SKU: Number,
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
