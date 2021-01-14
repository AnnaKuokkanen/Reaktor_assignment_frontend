import React from 'react';
import { Card } from 'react-bootstrap';

const Facemasks = ({ facemasks }) => {
  return (
    <div>
      <h1>Facemasks</h1>
      {facemasks.map(facemask => 
        <div key={facemask.id}>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>{facemask.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Facemasks;