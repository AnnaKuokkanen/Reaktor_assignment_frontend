import React from 'react'
import { Card, Spinner } from 'react-bootstrap'

const Product = ({ product }) => {
  if (product === undefined) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="info" />
      </div>
    )
  }
  
  return (
    <div>
      <h1>{product.name}</h1>
      <br />
      <Card border="info" style={{ width: '50rem' }} bg={'light'}>
        <Card.Body>
          <Card.Title>Category: {product.type}</Card.Title>         
        </Card.Body>
        <Card.Body>
          <Card.Title>Manufacturer: {product.manufacturer}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Title>Name: {product.name}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Title>Price: {product.price}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Title>Available in colors:</Card.Title>
          {product.color.map(color => 
            <Card.Title key={color}>{color}</Card.Title>
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product