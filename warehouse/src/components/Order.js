import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const Order = () => {
  return (
    <div>
      <DropdownButton 
        id="dropdown-basic-button" 
        title="Order by"
        variant="info"
      >
        <Dropdown.Item>Price</Dropdown.Item>
        <Dropdown.Item>Name</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}
export default Order