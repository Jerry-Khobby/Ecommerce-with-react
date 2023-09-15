import React,{useState} from 'react'
import {useParams} from 'react-router-dom';
import {GoPlus} from 'react-icons/go';
import {RxMinus} from 'react-icons/rx';
/* import { useCart } from '../../../context/CartContext'; */
import FrontPage from '../../frontPageBody/productSession';
import {menClothings} from '../../../Data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, findItemAndDecrease, deleteItem, itemsInCart } from '../../../state/reducers';


const CategoryCartMenClothing = () => {
    const {categoryId} =useParams();
    const product =menClothings.find((p)=>p.id===parseInt(categoryId));


    const cartItem=useSelector(itemsInCart);
    const dispatch =useDispatch();

    const handleAddToCart =()=>{
      const {id,name,price,image}=product;
      const existingItem=cartItem.find(item=>item.id===id);
      if(existingItem) {
        dispatch(increaseQuantity(existingItem.id));
      }else{
        dispatch(
          addToCart({
            id,
            name,
            price,
            quantity:0,
            image,
          })
        )
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
                  <GoPlus className='plus-icon-quantity' onClick={{}}/>
                  </div>
                  <div>
                  <p>{{}}</p>
                  </div>
                  <div>
                  <RxMinus className='plus-icon-quantity' onClick={{}}/>
                  </div>
              </div>
              </div>
            </div>
            <div className="product-info-add-to-cart">
              <button onClick={handleAddToCart} className="add-to-cart-button" disabled={{}}>
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