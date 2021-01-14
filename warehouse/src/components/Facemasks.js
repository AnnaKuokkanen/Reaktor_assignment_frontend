import React from 'react';

const Facemasks = ({ facemasks }) => {
  return (
    <div class="container">
      <h1>Facemasks</h1>
      {facemasks.map(facemask => 
        <div key={facemask.id}>
          <p>{facemask.name}</p>
        </div>
      )}
    </div>
  )
}

export default Facemasks;