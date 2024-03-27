
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path")

//middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "dist")))

mongoose.set('strictQuery', false)

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

//listen
app.listen(9000, () => {
  console.log('The server is running')
})