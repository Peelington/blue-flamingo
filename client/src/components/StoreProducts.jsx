import React, { useContext } from "react"
import { ProductContext } from "./ProductContext"
import { useNavigate } from "react-router-dom"


export default function StoreProducts(props) {

  const navigate = useNavigate()
  // console.log(props)

  const {ProductItems, setProductItems} = useContext(ProductContext)
 

  function handleClick(){
    navigate(`/product/${props.productId}`)
  }


  return (
    <div className="store-item-list" onClick={handleClick}>
      <div className="store-item">
        <h1>{props.item}</h1>
        <img src={props.imgurl} className='items-img'/>
        <p>{props.furnitureType}</p>
        <p>${props.price}</p>
        <p>Make of {props.material}</p>
        <p>{props.details}</p>
      </div>
    </div>
  )
}