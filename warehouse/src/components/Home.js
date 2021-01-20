import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Warehouse!</h1>
      <br />
      <h3>Choose a category of products</h3>
      <br />
      <Link className="link" to="/beanies">
        <Button variant="info">
          <span>Beanies</span>
        </Button>
      </Link>
      <Link className="link" to="/gloves">
        <Button variant="secondary">
          <span>Gloves</span>
        </Button>
      </Link>
      <Link className="link" to="/facemasks">
        <Button variant="dark">
          <span>Facemasks</span>
        </Button>
      </Link>
    </div>
  )
}

export default Home