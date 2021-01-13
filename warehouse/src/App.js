import React, { useState } from 'react';
import Beanies from './components/Beanies';
import Gloves from './components/Gloves';
import Facemasks from './components/Facemasks';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";


const App = () => {

  const [beanies, setBeanies] = useState([]);
  const [gloves, setGloves] = useState([]);
  const [facemasks, setFacemasks] = useState([]);

  const padding = {
    padding: 5
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/beanies">
            <Beanies beanies={beanies} />
            <div class="container">
              <Link style={padding} to="/">home</Link>
            </div>
          </Route>
          <Route path="/gloves">
            <Gloves gloves={gloves} />
            <div class="container">
              <Link style={padding} to="/">home</Link>
            </div>
          </Route>
          <Route path="/facemasks">
            <Facemasks facemasks={facemasks} />
            <div class="container">
              <Link style={padding} to="/">home</Link>
            </div>
          </Route>
          <Route path="/">
            <Home />
            <div class="container">
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