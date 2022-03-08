const Product = require('../models/product');
const seedData = require('./productsSeed.json');

Product.deleteMany({})
    .then(()=> {
        return User.insertMany(seedData);
    })
    .then(console.log)
    .catch(console.err)
    .finally(() => {
        process.exit();
    })