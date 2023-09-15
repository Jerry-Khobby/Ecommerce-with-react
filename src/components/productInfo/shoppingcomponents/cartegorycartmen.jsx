import React,{useState} from 'react'
import {useParams} from 'react-router-dom';
import {GoPlus} from 'react-icons/go';
import {RxMinus} from 'react-icons/rx';
/* import { useCart } from '../../../context/CartContext'; */
import FrontPage from '../../frontPageBody/productSession';
import {menClothings} from '../../../Data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, itemsInCart } from '../../../state/reducers';
import {Button, ButtonBase,} from '@mui/material'


const CategoryCartMenClothing = () => {
const dispatch=useDispatch();
    const {categoryId} =useParams();
    const product =menClothings.find((p)=>p.id===parseInt(categoryId));

  
const [counter,setCounter]=useState(0);

const increaseCounter=()=>{
  setCounter(counter+1)
}

const decreaseCounter=()=>{
  if(counter>0){
    setCounter(counter-1)
  }
}

const cartItems=useSelector(itemsInCart);

const handleAddToCart=()=>{
  const existingItem=cartItems.find((item)=>item.id===product.id);
  if(existingItem) {
    dispatch(increaseQuantity({
      id:product.id,
    }))
  }else{
    dispatch(
      addToCart(
        product.id,
        product.name,
        product.price,
        counterValue,
        product.image
      )
    )
  }
}

const cartItem=cartItems.filter(el=>el.id===product.id ? el:null) 

//specifying which counter value to show 
const carBtn=()=>{
  if(cartItem.length>0){
    return<>
      <ButtonBase sx={{font: "inherit", background: "#D3D3D3",p:"8px",color:"white", borderRadius:"5px"}}>Added to cart</ButtonBase>
    </>
  }
  return <>
   <Button sx={{textTransform: "lowercase", color: "black", border: "1px solid black", transition: "all .1s ease",
                                "&:hover": {
                                    background: "black",
                                    color: "white",}}} onClick={ handleAddToCart}
                                       /*   setAddedToCart(true) */
                                       >Add to cart</Button>
  </>
}


const counterValue = () => {
  if(cartItem.length > 0){
      
  }
}

    return ( 
        <div className="product-info-container">
        <div className="product-info-container-image-description">
          <div className="product-info-container-image">
            <img
              src={product.image}
              alt={product.name}
              height={350}
              width={350}
              className="product-info-image"
            />
          </div>
          <div className="product-info-details">
            <div className="product-info-name">
              <h3>{product.name}</h3>
            </div>
            <div className="product-info-price">
              <h3>{product.price}</h3>
            </div>
            <div className="product-info-description">
              <p>{product.description}</p>
            </div>
            <div className="product-info-quantity">
              <div className='quantity-icons'>
              <h5>Quantity</h5>
              <div className='quantity-controls-one'>
                  <div>
                  <GoPlus className='plus-icon-quantity' onClick={increaseCounter}/>
                  </div>
                   <div>
                  <p>{counter}</p>
                  </div>
                  <div>
                  <RxMinus className='plus-icon-quantity' onClick={decreaseCounter}/>
                  </div>
              </div>
              </div>
            </div>
            <div className="product-info-add-to-cart">
            {
              carBtn()
            }
            </div>
          </div>
        </div>
  
        <FrontPage />
      </div>
     );
}
 
export default CategoryCartMenClothing;