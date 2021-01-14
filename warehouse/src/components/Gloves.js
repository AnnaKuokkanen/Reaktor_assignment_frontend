import React from 'react';

const Gloves = ({ gloves }) => {
  return (
    <div>
      <h1>Gloves</h1>
      {gloves.map(glove => 
        <div key={glove.id}>
          <p>{glove.name}</p>
        </div>
      )}
    </div>
  )
}

export default Gloves;