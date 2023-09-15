import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    items:[],
    isLoading:false,
    errorMsg:null,
}

const cartSlice=createSlice({
    name:"cartItems",
    initialState,
    reducers:{
        clearCart:(state)=>{
state.items=[];
        }
    },
    increaseQuantity:(id,state)=>{
        const item =state.items.filter(item=>id===id?item:null);
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
export const loading = (state) => state.cart.isLoading
export const errorMessage = (state) => state.cart.errorMsg