import React,{createContext,useContext,useState} from 'react'

const CartContext=createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}){
    const [cartCount,setCartCount]=useState(0);
    const [quantity,setQuantity]=useState(0);

    const addToCart=()=>{
        setCartCount(cartCount+quantity);
        setQuantity(quantity+1);
    };

    const removeFromCart=()=>{
        if(cartCount>0){
        setCartCount(cartCount-1);
        setQuantity(quantity-1);
        
    }
};

return(
    <CartContext.Provider value={{cartCount,addToCart,removeFromCart,setCartCount,quantity,setQuantity}}>
        {children}
    </CartContext.Provider>
)
}
