import React, { useState, useEffect } from 'react';
import Beanies from './components/Beanies';
import Gloves from './components/Gloves';
import Facemasks from './components/Facemasks';
import Home from './components/Home';
import { getByCategory } from './services/products';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';


const App = () => {

  const [beanies, setBeanies] = useState([]);
  const [gloves, setGloves] = useState([]);
  const [facemasks, setFacemasks] = useState([]);

  useEffect(() => {
    getByCategory('beanies')
      .then(response => setBeanies(response))
    getByCategory('gloves')
      .then(response => setGloves(response))
    getByCategory('facemasks')
      .then(response => setFacemasks(response))
  }, []);

  const padding = {
    padding: 5
  }

  return (
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Your Warehouse</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="beanies">Beanies</Nav.Link>
          <Nav.Link href="gloves">Gloves</Nav.Link>
          <Nav.Link href="facemasks">Facemasks</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/beanies">
            <Beanies beanies={beanies} />
          </Route>
          <Route path="/gloves">
            <Gloves gloves={gloves} />
          </Route>
          <Route path="/facemasks">
            <Facemasks facemasks={facemasks} />
          </Route>
          <Route path="/">
            <Home />
            <div>
              <Link style={padding} to="/beanies">beanies</Link>
              <Link style={padding} to="/gloves">gloves</Link>
              <Link style={padding} to="/facemasks">facemasks</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;