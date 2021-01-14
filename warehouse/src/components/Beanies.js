import React from 'react';
import { Card } from 'react-bootstrap';

const Beanies = ({ beanies }) => {
  return (
    <div>
      <h1>Beanies</h1>
      {beanies.map(beanie => 
        <div key={beanie.id}>
          <Card style={{ width: '25rem' }}>
            <Card.Body>
              <Card.Title>{beanie.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Beanies;