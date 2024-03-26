const express = require('express')
const productRouter = express.Router()
const Product = require('../models/product.js')

//get all
productRouter.get('/', async (req, res, next) => {
  try {
    const seating = await Product.find()
    return res.status(200).send(seating)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//get one
productRouter.get('/:itemId', async (req, res, next) => {
  console.log(res)
  try {
    const item = await Product.find({ _id: req.params.itemId })
    return res.status(200).send(item)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//try catch post
productRouter.post("/", async (req, res, next) => {
  try {
    const newItem = new Product(req.body)
    const savedItem = await newItem.save()
    return res.status(201).send(newItem)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//delete try catch
productRouter.delete('/:itemId', async (req, res, next) => {
  try {
    const deletedItem = await Product.findOneAndDelete({ _id: req.params.itemId })
    if (!deletedItem) {
      return res.status(404).send("Item not Found")
    }
    return res.status(200).send(`Successfully Deleted ${deletedItem.item} from store`)
  } catch (err) {
    res.status(500)
    return next(err)
  }
});

//put try catch
productRouter.put('/:itemId', async (req, res, next) => {
  try {
    const updatedItem = await Product.findOneAndUpdate(
      { _id: req.params.itemId },
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).send("item not found")
    }
    return res.status(201).send(updatedItem)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

module.exports = productRouter




