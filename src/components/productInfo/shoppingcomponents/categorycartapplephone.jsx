import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import {GoPlus} from 'react-icons/go';
import {RxMinus} from 'react-icons/rx';
import { useCart } from '../../../context/CartContext';
import FrontPage from '../../frontPageBody/productSession';
import {applephones} from '../../../Data/products';

const CategoryCartApplephones = () => {
    const {categoryId} =useParams();
    const product =applephones.find((p)=>p.id===parseInt(categoryId));

    const { addToCart,removeFromCart,cartCount,setCartCount,quantity } = useCart();
    const[isButtonDisabled,setIsButtonDisabled] =useState(false);

    useEffect(()=>{
        const storedCartCount =localStorage.getItem('cartCount');
        if(storedCartCount!==null){
            setCartCount(parseInt(storedCartCount));
        }
          },[setCartCount])


          
useEffect(()=>{
    localStorage.setItem('cartCount',cartCount.toString());
},[cartCount])

  if (!product) {
    return <div className="product-not-found">Product not Found</div>;
  }

  const handleAddToCart=()=>{
    if(cartCount===0){
      addToCart();
      setIsButtonDisabled(true);
    }else if(cartCount===1){
      setIsButtonDisabled(true);
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
                  <GoPlus className='plus-icon-quantity' onClick={addToCart}/>
                  </div>
                  <div>
                  <p>{quantity}</p>
                  </div>
                  <div>
                  <RxMinus className='plus-icon-quantity' onClick={removeFromCart}/>
                  </div>
              </div>
              </div>
            </div>
            <div className="product-info-add-to-cart">
              <button onClick={handleAddToCart} className="add-to-cart-button" disabled={isButtonDisabled}>
                {isButtonDisabled ? "Add to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
  
        <FrontPage />
      </div>
     );
}
 
export default CategoryCartApplephones;