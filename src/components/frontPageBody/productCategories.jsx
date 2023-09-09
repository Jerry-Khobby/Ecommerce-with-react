import React from 'react'
import categories from '../../Data/category';
import './productCategories.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'


const ProductCategories = () => {
    return ( 
        <div className='categories-list-heading'>
            <div className='heading-featured'>
                <h3>Product Categories</h3>
            </div>
            <div className='categories-list'>
             {categories.map((category) => (
    <Link to={`/cart/${category.id}`} style={{textDecoration:'none',color:'inherit'}}>
    <Card  className="categories-card" key={category.id}>
      <Card.Img src={category.image} alt={category.name} className="categories-image" />
      <Card.Body className="categories-details">
        <Card.Title className="categories-name">{category.name}</Card.Title>
      </Card.Body>
    </Card>
    </Link>
  ))}
 </div>
        </div>
     );
}
 
export default ProductCategories;