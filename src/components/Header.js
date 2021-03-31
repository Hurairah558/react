import React from 'react'
import {Button,Navbar,Form,FormControl, Nav } from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link><Link to="/show" >Show</Link></Nav.Link>
            <Nav.Link ><Link to="/admissionform" >AdmissionForm</Link></Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Header;
