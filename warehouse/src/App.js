import React, { useState, useEffect } from 'react';
import Beanies from './components/Beanies';
import Gloves from './components/Gloves';
import Facemasks from './components/Facemasks';

const App = () => {

  const [beanies, setBeanies] = useState([]);
  const [gloves, setGloves] = useState([]);
  const [facemasks, setFacemasks] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCategory('');
  }, [])

  const handleCategory = (category) => {
    console.log('Category is ', category);
    setCategory(category);
  }

  if (category === 'beanies') {
    return (
      <div>
        <Beanies beanies={beanies}/>
      </div>
    )
  }

  if (category === 'gloves') {
    return (
      <div>
        <Gloves gloves={gloves}/>
      </div>
    )
  }

  if (category === 'facemasks') {
    return (
      <div>
        <Facemasks facemasks={facemasks}/>
      </div>
    )
  }

  return (
    <div class="container">
      <h1>Welcome to the Warehouse!</h1>
      <br />
      <h3>Choose a category of products</h3>
      <br />
      <button onClick={() => handleCategory('beanies')}>Beanies</button>
      <button onClick={() => handleCategory('gloves')}>Gloves</button>
      <button onClick={() => handleCategory('facemasks')}>Facemasks</button>
    </div>
  );
}

export default App;