import React, { useState, useEffect } from "react";
import axios from "axios"

const ProductContext = React.createContext()

function ProductContextProvider(props) {

  const [productItems, setProductItems] = useState([])

  // console.log(productItems)

  function getProducts() {
    axios.get('/api/products')
      .then(res => setProductItems(res.data))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }


  // console.log(productItems)

  useEffect(() => {
    getProducts()
  }, [])


  return (
    <ProductContext.Provider value={{
      productItems,
      setProductItems,
    }}>

      {props.children}

    </ProductContext.Provider>
  )
}

export { ProductContext, ProductContextProvider }