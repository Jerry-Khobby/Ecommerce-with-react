import { createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  cartItems: [], // Each cart item should have id, name, image, price, and quantity.
};

// Create a cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
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
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart based on its ID
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      // Clear the entire cart
      state.cartItems = [];
    },
    updateQuantity:(state,action)=>{
        const { id, quantity } = action.payload;
        const itemToUpdate = state.cartItems.find((item) => item.id === id);
  
        if (itemToUpdate) {
          // Update the quantity of the specified item
          itemToUpdate.quantity = quantity;
        }
    }
  },
});

export const { addToCart, removeFromCart, clearCart,updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;
