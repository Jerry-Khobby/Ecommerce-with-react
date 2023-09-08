import React,{createContext,useContext,useState} from 'react'

const CartContext=createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}){
    const [cartCount,setCartCount]=useState(0);

    const addToCart=()=>{
        setCartCount(cartCount+1);
    };

    const removeFromCart=()=>{
        if(cartCount>0){
        setCartCount(cartCount-1);
        
    }
};

return(
    <CartContext.Provider value={{cartCount,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
)
}