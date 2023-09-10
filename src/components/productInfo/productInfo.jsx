import React from 'react';
import { useLocation } from 'react-router-dom';
import products from '../../Data/data';
import './productInfo.css';
import FrontPage from '../frontPageBody/productSession';
//import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
//import cartItem from '../../Data/cartdatabase'

const ProductInfo = () => {
    const location = useLocation();
    const userId = location.pathname.split('/').pop();

    const itemData = products.find((product) => product.id === parseInt(userId));

const {addToCart}=useCart();

    return (
        <div>
            <FrontPage />
           
        </div>
    );
}

export default ProductInfo;
