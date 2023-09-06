import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/users">Users</Nav.Link>
        <Nav.Link as={Link} to="/contact_us">Contact us</Nav.Link>
    </Nav>
    </Container>
</Navbar></div>
)
}

export default Navigation