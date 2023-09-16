import React from 'react'
import './bookings.css'
import {useSelector} from "react-redux";



const Bookings = () => {
  const cartItems=useSelector((state) =>state.cart.cartItems);
  return (
    <div>
      <h1>Cart Items</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          {/* You can add more details here */}
        </div>
      ))}
    </div>
  )
}

export default Bookings;
