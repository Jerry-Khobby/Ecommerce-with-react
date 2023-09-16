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
import ShoppingPage from './components/productInfo/shoppingpage';
import PreFooter from './components/footerSection/preFooter';
import CategoryCartMenClothing from './components/productInfo/shoppingcomponents/cartegorycartmen';
import CategoryCartApplephones from './components/productInfo/shoppingcomponents/categorycartapplephone';
import CategoryCartElectronic from './components/productInfo/shoppingcomponents/categoryelectronic';
import CategoryCartChildrenShoes from './components/productInfo/shoppingcomponents/categorychildrenshoes';
import './App.css'
import { Provider } from 'react-redux';
import store from '../src/state/store';


function App() {

  return (
    <div className='app-container'>
      <Provider store={store}>
    <EmailProvider>
    <CartProvider>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Layout/>}>
{/** I will add my additional routes over here  */}
<Route index element={<FrontPage/>} exact/>
<Route path="/cart/:productId" Component={ProductInfo} exact/>
<Route path="/cart/MenClothing/:categoryId" Component={CategoryCartMenClothing} exact/>
<Route path='/cart/AppleDevices/:categoryId' Component={CategoryCartApplephones} exact/>
<Route path='/cart/ChildrenShoes/:categoryId' Component={CategoryCartChildrenShoes} exact/>
<Route path='/cart/electronicDevices/:categoryId' Component={CategoryCartElectronic} exact/>
<Route path='/bookings' Component={Bookings} exact />
<Route path='/shoppingpage' Component={ShoppingPage} exact/>
</Route>
<Route path="/signin" Component={Login} exact/>
<Route path='/signup' Component={NewAccount} exact/>
</Routes>

   </BrowserRouter>
   </CartProvider>
   </EmailProvider>
<PreFooter/>
</Provider>
   </div>
  );
}

export default App;