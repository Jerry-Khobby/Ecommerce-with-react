import React,{createContext,useContext,useState,useEffect} from 'react'

const CartContext=createContext();

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}){
    const [cartCount,setCartCount]=useState(0);
    const [quantity,setQuantity]=useState(0);

useEffect(()=>{
    const storedQuantity =localStorage.getItem('cartQuantity');
    if(storedQuantity!==null){
        setQuantity(parseInt(storedQuantity,10));
        setCartCount(parseInt(storedQuantity,10));
    }
},[]);
    const addToCart=()=>{
        setQuantity(quantity+1);
        setCartCount(quantity+1);
        localStorage.setItem('cartQuantity',(quantity+1).toString());
    };

    const removeFromCart=()=>{
        if(cartCount>0){
    setCartCount(cartCount-1); 
    setQuantity(quantity-1);
    localStorage.setItem('cartQuantity',(quantity-1).toString());
    }
};

return(
    <CartContext.Provider value={{cartCount,addToCart,removeFromCart,setCartCount,quantity,setQuantity}}>
        {children}
    </CartContext.Provider>
)
}
