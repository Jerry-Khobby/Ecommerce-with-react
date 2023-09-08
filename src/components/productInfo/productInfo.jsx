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
        <div className="product-info-container">
            <div className='product-info-image-text'>
            <div className="product-image-container">
                <img src={itemData.image} alt={itemData.name} className="product-image-cart" />
                {/** when times permits i will add a social media stuffs  */}
            </div>
            {/** Container for text */}
            <div className="product-text-container">
                <h3 className="product-name">{itemData.name}</h3>
                <p className="product-price">{itemData.price}</p>
                <p className="product-description">{itemData.description}</p>
                <div className="add-to-cart">
                    <button className="add-to-cart-button" onClick={addToCart}>ADD TO CART</button>
                </div>
            </div>
            </div>
            <FrontPage />
        </div>
    );
}

export default ProductInfo;
