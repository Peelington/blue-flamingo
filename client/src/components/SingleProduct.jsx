import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductContext } from "./ProductContext"
import axios from "axios"


export default function SingleProduct(props){

  const {productId} = useParams()

  const {productItems, setProductItems} = useContext(ProductContext)

  const requestedItem = productItems.find(product => product._id === productId)

  // const [updates, setUpdates] = useState(requestedItem)
  
  // function handleBuy() {
  //   const updates = { sold: true }; // or any other updates you want to apply
  
  //   axios.put(`/api/product/${requestedItem._id}`, updates)
  //     .then(res => {
  //       console.log(requestedItem._id)
  //       setProductItems(prevItems => prevItems.map(item => 
  //         item._id !== requestedItem._id ? item : { ...item, sold: true }
  //       ));
  //     })
  //     .catch(err => console.log(err));
  // }
  



 function handleBuy(productId){
  
    axios.put(`/api/products/${productId}`,{sold: true})
     .then(res =>{
      setProductItems(prevItems => prevItems.map(item => item._id !== productId ? item : res.data))
    })
    // .then(res => console.log(res))
     .catch(err => console.log(err))
  }
// console.log(requestedItem)

function handleUnbuy(productId){
  
  axios.put(`/api/products/${productId}`,{sold: false})
   .then(res =>{
    setProductItems(prevItems => prevItems.map(item => item._id !== productId ? item : res.data))
  })
  // .then(res => console.log(res))
   .catch(err => console.log(err))
}


  return(
    <div className="single-item">
      <h1 className="item-name">{requestedItem.item}</h1>
      {!requestedItem.sold && (<img src={requestedItem.imgurl} className='item-img'/>)}
      {requestedItem.sold && (<img src="https://t3.ftcdn.net/jpg/00/81/62/14/360_F_81621402_Ayr2ulNGipxN1DCaJ6UjBjWzviJdsGHt.jpg" className='item-img'/>)}
      <p className="item-type">{requestedItem.furnitureType}</p>
      <p className="item-price">${requestedItem.price}</p>
      <p className="item-material">Material type: {requestedItem.material}</p>
      <p className="item-details">{requestedItem.details}</p>
      <button className="buyBtn" onClick={()=> handleBuy(productId)}>Buy this Item</button>
      {requestedItem.sold && <button className="buyBtn" onClick={()=> handleUnbuy(productId)}>Unbuy</button>}
    </div>
  )
}