import React from 'react';

const Beanies = ({ beanies }) => {
  return (
    <div class="container">
      <h1>Beanies</h1>
      {beanies.map(beanie => 
        <div>
        </div>
      )}
    </div>
  )
}

export default Beanies;