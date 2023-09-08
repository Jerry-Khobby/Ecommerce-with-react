import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { IoAdd } from 'react-icons/io5'
import { AiOutlineMinus } from 'react-icons/ai'
import './bookings.css'
import { useCart } from '../../context/CartContext'

const Bookings = () => {
const {addToCart}=useCart();
const {removeFromCart}=useCart();



  return (
    <div className="bookings-container">
    <div classname="bookings-container-divider">
      <div className="cart-heading">
        <h3>Cart(5)</h3>
      </div>
      <div className="product-details-container">
        <div className="product-item">
          <div className="product-image">
            <div className='image'>
            <img  height={120} width={120}   src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIA6sJOg2Bp0dbapbOEKX5YBh9lFmZ3dahnD2Gg7rDEG_Xtnn_THqs6srrNAIJba62YUkg5GoXxg8zHCzq_w26sD0HYLQvkUEjR0S7hArDCGU7E0fiVGBLH_KjbR0zJchJqE5jP-9QlXU&usqp=CAc" alt="" />
            </div>
            <div className='action-buttons'>
                <div className='remove-button'>
                    <FaTrashAlt/>
                    </div>
                <div className='remove-text'>
                    <h5>REMOVE</h5>
                </div>
            </div>
          </div>
          <div className="product-info">
            <h5>Product name 5</h5>
            <p>There are certain things that you don't have to be told</p>
          </div>
        </div>
        <div className="product-price">
          <div className='amount'>
          <h4>$5000</h4>
          </div>
          <div className='quantity-controls'>
            <div className='minus-button'>
                <AiOutlineMinus onClick={removeFromCart}/>
                </div>
            <div className='add-button'>
                <IoAdd color='#fff' onClick={addToCart}/>    
            </div>
          </div>
        </div>
      </div>
      </div>
    <div className="cart-summary">
        <div className="cart-summary-heading">
          <h4>CART SUMMARY</h4>
        </div>
        <div className="subtotal">
          <div className="subtotal-label">
            <h5>Subtotal</h5>
          </div>
          <div className="subtotal-amount">
            <h5>N395000</h5>
          </div>
        </div>
        <p>Delivery fees are not included yet</p>
        <div className="checkout-button">
          <button>CHECKOUT (N39500)</button>
        </div>
      </div>
    </div>
  )
}

export default Bookings;
