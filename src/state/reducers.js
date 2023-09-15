import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    items:[],
}

const cartSlice=createSlice({
    name:"cartItems",
    initialState,
    reducers:{
        clearCart:(state)=>{
state.items=[];
        }
    },
    increaseQuantity:(action,state)=>{
        const {id} =action.payload;
        const item = state.items.find((item) => item.id === id);
        if(item){
            item.quantity+=1
        }
    },
    findItemAndDecrease:(state,action)=>{
        const idToFind=action.payload;
        const item=state.items.find(el=>el.id===idToFind);
        item.quantity-=1;
    },
    deleteItem:(state,action)=>{
        const idTofind=action.payload;
        state.items=state.filter(el=>el.id!==idTofind?el:null);
    },
    addToCart:{
        reducer(state,action){
            state.items.push(action.payload);
            console.log("It is done successfully");
        },
        prepare(id,name,price,quantity,image){
            return{
                payload:{
                    id,
                    cartId:nanoid(4),
                    name,
                    price,
                    quantity,
                    image,

                }
            }
        }

    }
});

export default cartSlice.reducer
export const {addToCart,clearCart,increaseQuantity, findItemAndIncrease, findItemAndDecrease, deleteItem} = cartSlice.actions
export const itemsInCart = (state) => state.cart.items