import React,{useState} from 'react'
import {useParams} from 'react-router-dom';
import {GoPlus} from 'react-icons/go';
import {RxMinus} from 'react-icons/rx';
import FrontPage from '../../frontPageBody/productSession';
import {menClothings} from '../../../Data/products';
import { addToCart,updateQuantity } from '../../../state/reducers';
import { useDispatch,useSelector } from 'react-redux';

const CategoryCartMenClothing = () => {
    const {categoryId} =useParams();
    const product =menClothings.find((p)=>p.id===parseInt(categoryId));
//dispatching the redux first 
    const dispatch =useDispatch();
    const cartItems =useSelector((state)=>state.cart.cartItems);

const existingItem = cartItems.find((item) => item.id === product.id);
const initialQuantity =existingItem ? existingItem.quantity :0
const [quantity, setQuantity] = useState(initialQuantity);

const handleAddToCart=()=>{
  if(quantity===0){
    setQuantity(1);
    dispatch(addToCart(product));
    dispatch(updateQuantity({
id:product.id,
quantity:1,
    }))
  }
  if(quantity>0){
    setQuantity(quantity)
    dispatch(addToCart(product));
    dispatch(updateQuantity({
      id:product.id,
      quantity:quantity,
    }))
  }
  if(!existingItem){
    dispatch(addToCart(product));
  }
}

const increaseCounter=()=>{
  setQuantity(quantity+1);
  dispatch(updateQuantity({
    id:product.id,
    quantity:quantity+1,
  }))
}

const decreaseCounter = () => {
  if(quantity > 0){
     setQuantity(quantity-1);
     dispatch(updateQuantity({
      id:product.id,
      quantity:quantity-1,
     }))
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
                  <p>{quantity}</p>
                  </div>
                  <div>
                  <RxMinus className='plus-icon-quantity' onClick={decreaseCounter}/>
                  </div>
              </div>
              </div>
            </div>
            <div className="product-info-add-to-cart">
              <button onClick={handleAddToCart} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
  
        <FrontPage />
      </div>
     );
}
 
export default CategoryCartMenClothing;