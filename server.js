
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', false)

async function connectToDB() {
  try {
    await mongoose.connect('mongodb+srv://altonpeel123:y9X1PpyLBxIMYcLv@cluster0.5gl6zwk.mongodb.net/')
  } catch (err) {
    console.log(err)
  }
}

connectToDB().then(() => console.log('Connected to DB'))

//routes

app.use("/products", require('./routes/productRouter.js'))

//error handling
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errsMsg: err.message })
})

//listen
app.listen(9000, () => {
  console.log('The server is running')
})