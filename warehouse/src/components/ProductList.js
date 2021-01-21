import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Product from './Product'
import Order from './Order'
import { Link } from 'react-router-dom'

const ProductList = ({ categoryName, products }) => {
  const [product, setProduct] = useState([])

  const handleCardClick = (productId) => {
    const product = products.filter(product => product.id === productId)
    setProduct(product.concat(product))
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
      <Order /> 
      <br />
      {products.map(product => 
        <Link key={product.id} className="link" to={`/${categoryName.toLowerCase()}/${product.id}`}>
          <div className="cardLink">
            <Card
              onClick={() => handleCardClick(product.id)} 
              border="info" 
              style={{ width: '25rem', cursor: 'pointer' }}
            >
              <Card.Header>Manufacturer: {product.manufacturer}</Card.Header>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
        </Link>      
      )}
    </div>
  )
}

export default ProductList