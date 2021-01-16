import React from 'react';
import { Card } from 'react-bootstrap';

const ProductList = ({ categoryName, products }) => {
  return (
    <div>
      <h1>{categoryName}</h1>
      {products.map(product => 
        <div key={product.id}>
          <Card border="info" style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
            </Card.Body>
          </Card>
          <br />
        </div>
      )}
    </div>
  )
}

export default ProductList;