import React, { useEffect, useState } from 'react';

const App = () => {

  const handleCategory = (category) => {
    console.log('Category is ', category);
  }

  return (
    <div className="App">
      <h1>Welcome to the Warehouse!</h1>
      <button onClick={() => handleCategory('beanies')}>Beanies</button>
      <button onClick={() => handleCategory('gloves')}>Gloves</button>
      <button onClick={() => handleCategory('facemasks')}>Facemasks</button>
    </div>
  );
}

export default App;