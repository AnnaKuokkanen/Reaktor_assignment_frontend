import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import ProductList from './components/ProductList'
import Product from './components/Product'
import Footer from './components/Footer'
import { getByCategory } from './services/products'
import {
  Switch, Route, Link, useRouteMatch
} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

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

  const matchBeanies = useRouteMatch('/beanies/:id')
  const beanie = matchBeanies 
    ? beanies.filter(beanie => beanie.id === String(matchBeanies.params.id))[0]
    : null

  const matchGloves = useRouteMatch('/gloves/:id')
  const glove = matchGloves
    ? gloves.filter(glove => glove.id === String(matchGloves.params.id))[0]
    : null

  const matchFacemasks = useRouteMatch('/facemasks/:id')
  const facemask = matchFacemasks
    ? facemasks.filter(facemask => facemask.id === String(matchFacemasks.params.id))[0]
    : null

  console.log('Beanies are', beanies)
  console.log('Gloves are', gloves)
  console.log('Facemasks are', facemasks)

  console.log('Beanie is', beanie)
  console.log('Glove is', glove)
  console.log('Facemask is', facemask)


  return (
    <div className="container">
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
        <Route path="/beanies/:id">
          <Product product={beanie} />
        </Route>
        <Route path="/gloves/:id">
          <Product product={glove} />
        </Route>
        <Route path="/facemasks/:id">
          <Product product={facemask} />
        </Route>
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
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App