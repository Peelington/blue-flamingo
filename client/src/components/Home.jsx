import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import Footer from "./Footer"
import { ProductContext } from "./ProductContext"
import StoreProducts from "./StoreProducts"
// import {useNavigate} from "react-router-dom"


export default function Home(props) {

  const {productItems} = useContext(ProductContext)
  // const {productItems} = props
  
  
  const storeItems = productItems.map(product =>
    <StoreProducts
      key={product._id}
      item={product.item}
      type={product.type}
      imgurl={product.imgurl}
      price={product.price}
      material={product.material}
      productId = {product._id}
    />
  )


  return (
    <>
      
      {storeItems}
    </>
  )
}

