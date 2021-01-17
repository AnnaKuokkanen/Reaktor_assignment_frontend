import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Product from './Product';

const ProductList = ({ categoryName, products }) => {
  const [product, setProduct] = useState([]);

  const handleCardClick = (productId) => {
    const product = products.filter(product => product.id === productId)
    console.log('Product is ', product);
    setProduct(product.concat(product));
  }

  if (product.length > 0) {
    return (
      <div>
        <Product product={product[0]} />
      </div>
    )
  }

  return (
    <div>
      <h1>{categoryName}</h1>
      {products.map(product => 
        <div key={product.id}>
          <Card as="a" 
            onClick={() => handleCardClick(product.id)} 
            border="info" 
            style={{ width: '25rem', cursor: "pointer" }}
          >
            <Card.Header>Manufacturer: {product.manufacturer}</Card.Header>
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