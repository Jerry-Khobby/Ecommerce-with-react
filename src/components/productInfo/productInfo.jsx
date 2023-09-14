import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import products from '../../Data/data';
import './productInfo.css';
import FrontPage from '../frontPageBody/productSession';
import { useCart } from '../../context/CartContext';
import {GoPlus} from 'react-icons/go';
import {RxMinus} from 'react-icons/rx'

const ProductInfo = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { addToCart,removeFromCart,cartCount,setCartCount,quantity } = useCart();

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

  ///when I come tomorrow I will fix this one and then move on to the shops page 

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
            <button onClick={addToCart} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <FrontPage />
    </div>
  );
};

export default ProductInfo;
