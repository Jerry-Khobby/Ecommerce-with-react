import React from 'react'
import products from '../../Data/data';
import './productSession.css';
import { Link } from 'react-router-dom';








const ProductSession = () => {
    return ( 
        <div className="product-list">
  {products.map((product) => (
    <Link to={`/cart/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
    </Link>
  ))}
</div>

     );
}
 
export default ProductSession;