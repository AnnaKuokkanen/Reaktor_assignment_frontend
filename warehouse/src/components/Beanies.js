import React from 'react';

const Beanies = ({ beanies }) => {
  return (
    <div>
      <h1>Beanies</h1>
      {beanies.map(beanie => 
        <div key={beanie.id}>
          <p>{beanie.name}</p>
        </div>
      )}
    </div>
  )
}

export default Beanies;