import React from 'react'
import products from '../../Data/products';
import './productSession.css';
/* import products from '../../Data/products'; */
import MenClothing from '../productInfo/shoppingcomponents/menclothing';









const ProductSession = () => {
  const {menClothings}=products;
  const {applephones}=products;
    return ( 
        <div className="product-list-heading">
          <div className='heading-featured'>
            <h3>Featured Products</h3>
          </div>
<MenClothing categorynames={menClothings} header="" route="/cart/MenClothing"/>
<MenClothing categorynames={applephones} header=""  route="/cart/AppleDevices"/>
</div>

     );
}

export default ProductSession;