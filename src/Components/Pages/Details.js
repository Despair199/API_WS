import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams()

  const [user,setUser] = useState({})


  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((res) => setUser(res.data[0]))
    .catch((err)=> console.log(err));
  }, [id]);

  const adress = [...user , adress]
  return (
    <div>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.adress.city}</Card.Text>
        <Button variant="primary" onClick={()=> Navigate(-1)}>back </Button>
        </Card.Body>
        </Card>
    </div> 
  )
  }

export default Details