import React, { useState, useEffect } from 'react'
import { Card, DropdownButton, Dropdown, Spinner } from 'react-bootstrap'
import Product from './Product'
import { Link } from 'react-router-dom'

const ProductList = ({ categoryName, products }) => {
  const [product, setProduct] = useState([])
  const [productList, setProductList] = useState([])

  useEffect(() => {
    setProductList(products)
  }, [])

  const handleCardClick = (productId) => {
    const p = productList.filter(product => product.id === productId)
    setProduct(product.concat(p))
  }

  const handleDropdownChoice = (eventKey) => {
    console.log('Event: ', eventKey)
    let newProducts = [...productList]
    if (eventKey === 'cheap') {
      newProducts.sort((a, b) => {return a.price - b.price})
    } else if (eventKey === 'expensive') {
      newProducts.sort((a, b) => {return b.price - a.price})
    } else {
      newProducts.sort((a, b) => {return a.name - b.name})     
    }
    setProductList(newProducts)
    console.log('Products now', productList)
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
      {(productList.length > 0) ? (
        <div>
          <h1>{categoryName}</h1>
          <DropdownButton 
            id="dropdown-basic-button" 
            title="Order by"
            variant="info"
            onSelect={handleDropdownChoice}
          >
            <Dropdown.Item eventKey='cheap'>Price (cheapest first)</Dropdown.Item>
            <Dropdown.Item eventKey='expensive'>Price (most expensive first)</Dropdown.Item>
            <Dropdown.Item eventKey='name'>Name</Dropdown.Item>
          </DropdownButton>
          <br />
          {productList.map(product => 
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
      ) : (
        <div className="spinner">
          <Spinner animation="border" variant="info" />
        </div>
      )}
    </div>
  )
}

export default ProductList