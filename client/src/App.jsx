import React, { useState, useEffect, useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { ProductContext, ProductContextProvider } from './components/ProductContext';
import axios from 'axios';
import Title from './components/Title';
import Home from './components/Home';
import About from './components/About';
import Products from './components/StoreProducts';
import Footer from './components/Footer';
import './App.css'
import SingleProduct from './components/SingleProduct';

function App() {

  // const [productItems, setProductItems] = useState([])

  // function getProducts() {
  //   axios.get('/api/products')
  //     .then(res => setProductItems(res.data))
  //     .catch(err => console.log(err))
  // }

// console.log(productItems)

// useEffect(() => {
//     getProducts()
//   }, [])

const {productItems, setProductItems} = useContext(ProductContext)

  return (
    <>
        <Title />
        <Routes>
          <Route path="/" element={<Home productItems = {productItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<SingleProduct productItems ={productItems}/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App

//imrs + e for useEffect