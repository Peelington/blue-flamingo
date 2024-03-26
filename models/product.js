const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  furnitureType: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  material: {
    type: String
  },
  imgurl: {
    type: String
  },
  details: {
    type: String,
  },
  sold:{
    type: Boolean,
    required: true
  }
})



module.exports = mongoose.model("product", ProductSchema)