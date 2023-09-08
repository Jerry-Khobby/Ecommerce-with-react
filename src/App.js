import React from 'react';
import FrontPage from './components/mainComponents/frontPage';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import ProductInfo from './components/productInfo/productInfo';
//import Store from './components/store/store';
import {CartProvider} from '../src/context/CartContext'
import Login from '../src/components/registration/login'
import Bookings from './components/productInfo/bookings';
import { EmailProvider } from './context/email';
import Layout from './Layout';
import NewAccount from './components/registration/newaccount';
import './App.css'



function App() {
  return (
    <div className='app-container'>
    <EmailProvider>
    <CartProvider>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Layout/>}>
{/** I will add my additional routes over here  */}
<Route index element={<FrontPage/>} exact/>
<Route path="/cart/:productId" Component={ProductInfo} exact/>
<Route path='/bookings' Component={Bookings} exact />
</Route>
<Route path="/signin" Component={Login} exact/>
<Route path='/signup' Component={NewAccount} exact/>
</Routes>
   </BrowserRouter>
   </CartProvider>
   </EmailProvider>
   </div>
  );
}

export default App;