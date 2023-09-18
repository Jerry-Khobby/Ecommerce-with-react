import React from 'react'
import './bookings.css';
import {useSelector,useDispatch} from "react-redux";
import { Box, Container, Typography, Button } from '@mui/material'
import {updateQuantity,removeFromCart,clearCart } from '../../state/reducers';
import DeleteIcon from "@mui/icons-material/Delete";






const Bookings = () => {

  //getting all my items from the cart array datbase first before trying to work on the delete , clear 
  const dispatch=useDispatch();
  const cartItems =useSelector((state)=>state.cart.cartItems);


  //defining my functions to perform my work for me 
  const increaseCounter=(item)=>{
    dispatch(updateQuantity({
      id:item.id,
      quantity:item.quantity+1,
    }));
  };

  const decreaseCounter=(item)=>{
    if(item.quantity>0){
      dispatch(updateQuantity({
        id:item.id,
        quantity:item.quantity-1,
      }))
    }
    if(item.quantity-1===0){
      dispatch(removeFromCart({
        id:item.id,
      }))
    }
  }

const removeItem=(item)=>{
  dispatch(removeFromCart({
    id:item.id,
  }))
};


const clearItem=(item)=>{
  dispatch(clearCart({
    id:item.id,
  }))
}



  return (
    <div style={{height:'100vh'}} className='booking_master_container'>
      <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Cart Items</h2>
      {cartItems.length === 0 ? (
        <Typography variant='h6' style={{ textAlign: 'center' }}>
          Your cart is empty );
        </Typography>
      ) : null}
      {cartItems.map((item) => (
         <Container key={item.id} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
         <Box  display={"flex"} alignItems={"center"} gap={"16px"} marginBottom={"20px"} padding={'16px'} borderRadius={"5px"} sx={{
           "&:hover":{
             background: "#d3d3d3"
           }}}>
              <Box sx  = {{width: "100px", height: "100px", background: `url(${item.image})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></Box>
              <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
                  <Typography maxWidth={"150px"}>{item.name}</Typography>
                  <Typography fontWeight={"600"}>{`$${item.price}`}</Typography>
              </Box>
              <Box>
                  <Box display={"flex"} gap={"8px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                          <Button variant='outlined' sx={{
                             border: "1px solid black",
                             height: "30px",
                             color: "black",
                             transition: "all .1s ease",
                             "&:hover": {
                                 background: "black",
                                 color: "white",
                                 border: "none"
                             }
                         }} onClick={()=>decreaseCounter(item)}>-</Button>
                         <Box>{item.quantity}</Box>
                         <Button variant='outlined' sx={{
                             border: "1px solid black",
                             color: "black",
                             height: "30px",
                             transition: "all .1s ease",
                             "&:hover": {
                                 background: "black",
                                 color: "white",
                                 border: "none"
                             }
                         }} onClick={()=>increaseCounter(item)} >+</Button>
                     </Box>
             </Box>
             <Box>
                 <DeleteIcon onClick = {()=>removeItem(item)}/>
             </Box>
        </Box>
        {
        cartItems.length>0 ?<Button onClick={()=>clearItem(cartItems)} sx={{color: "black", border: "1px solid black"}}>Clear Cart</Button>:null
      }
 </Container>
      ))}
    </div>
  )
}

export default Bookings;
