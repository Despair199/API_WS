import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const UserCard = ({user}) => {
    const navigate = useNavigate()
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Button variant="primary" onClick={()=> navigate(`/details/${user.id}`)}>details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard