const mongoose = require("../connection");

const BookmarkSchema = new mongoose.Schema({
    brand: String,
    title: String,
    category: String,
    price: Number, 
    description: String
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = Bookmark;