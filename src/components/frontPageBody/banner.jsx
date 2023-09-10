import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Get 20% off if you buy within the next 24 hours</h1>
        <Link to="/shoppingpage">
            <div className='shop-now-button-div'>
           <button className="shop-now-button">Shop Now</button> 
           </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
