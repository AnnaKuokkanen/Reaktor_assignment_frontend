import React from 'react';
import { Card } from 'react-bootstrap';

const Gloves = ({ gloves }) => {
  return (
    <div>
      <h1>Gloves</h1>
      {gloves.map(glove => 
        <div key={glove.id}>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>{glove.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Gloves;