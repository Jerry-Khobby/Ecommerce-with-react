import { createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  cartItems: [], // Each cart item should have id, name, image, price, and quantity.
};



// Load cart data from localStorage if available
const loadCartFromStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : initialState;
};

// Create a cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState:loadCartFromStorage(),
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If the item is already in the cart, update the quantity
        existingItem.quantity++;
      } else {
        // If the item is not in the cart, add it
        state.cartItems.push({
          id,
          name,
          image,
          price,
          quantity: 0,
        });
      }
      //
      localStorage.setItem('cart',JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart based on its ID
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      // Clear the entire cart
      state.cartItems = [];

       // Remove cart data from localStorage
       localStorage.removeItem('cart');
    },
    updateQuantity:(state,action)=>{
        const { id, quantity } = action.payload;
        const itemToUpdate = state.cartItems.find((item) => item.id === id);
  
        if (itemToUpdate) {
          // Update the quantity of the specified item
          itemToUpdate.quantity = quantity;


           // Save the updated cart data to localStorage
        localStorage.setItem('cart', JSON.stringify(state));
        }
    }
  },
});

export const { addToCart, removeFromCart, clearCart,updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;
