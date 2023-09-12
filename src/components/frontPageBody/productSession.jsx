import React from 'react'
import products from '../../Data/data';
import './productSession.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';









const ProductSession = () => {
    return ( 
        <div className="product-list-heading">
          <div className='heading-featured'>
            <h3>Featured Products</h3>
          </div>
          <div className='product-list'>
  {products.map((product) => (
    <Link to={`/cart/${product.id}`} style={{textDecoration:'none',color:'inherit'}}>
    <Card  className="product-card" key={product.id}>
      <Card.Img src={product.image} alt={product.name} className="product-image" />
      <Card.Body className="product-details">
        <Card.Title className="product-name">{product.name}</Card.Title>
        <Card.Text className="product-price">${product.price}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  ))}
</div>
</div>

     );
}

export default ProductSession;