import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './menclothing.css';









const MenClothing= ({categorynames,header,route}) => {
    return ( 
        <div className="menclothing-list-heading">
          <div className='menclothing-heading-featured'>
            <h3>{header}</h3>
          </div>
          <div className='menclothing-list'>
  {categorynames.map((categoryname) => (
    <Link  to ={`${route}/${categoryname.id}`} style={{textDecoration:'none',color:'inherit'}}>
    <Card  className="menclothing-card" key={categoryname.id}>
      <Card.Img src={categoryname.image} alt={categoryname.name} className="menclothing-image" />
      <Card.Body className="menclothing-details">
        <Card.Title className="menclothing-name">{categoryname.name}</Card.Title>
        <Card.Text className="menclothing-price">${categoryname.price}</Card.Text>
      </Card.Body>
    </Card>
    </Link>
  ))}
</div>
</div>

     );
}
 
export default MenClothing;