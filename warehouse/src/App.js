import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { getByCategory } from './services/products'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

const App = () => {

  const [beanies, setBeanies] = useState([])
  const [gloves, setGloves] = useState([])
  const [facemasks, setFacemasks] = useState([])

  useEffect(() => {
    getByCategory('beanies')
      .then(response => setBeanies(response))
    getByCategory('gloves')
      .then(response => setGloves(response))
    getByCategory('facemasks')
      .then(response => setFacemasks(response))
  }, [])

  return (
    <div className="container">
      <Router>
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/">Your Warehouse</Navbar.Brand>
          <Nav className="mr-auto">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/beanies">Beanies</Link>
            <Link className="link" to="/gloves">Gloves</Link>
            <Link className="link" to="/facemasks">Facemasks</Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/beanies">
            <ProductList categoryName="Beanies" products={beanies} />
          </Route>
          <Route path="/gloves">
            <ProductList categoryName="Gloves" products={gloves} />
          </Route>
          <Route path="/facemasks">
            <ProductList categoryName="Facemasks" products={facemasks} />
          </Route>
          <Route path="/">
            <Home />
            <div>
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
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App