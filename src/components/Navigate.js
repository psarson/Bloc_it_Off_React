import React from 'react';     
import { Nav, NavItem, Navbar } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'

class Navigate extends React.Component {
    
    render() {      
        return (
            <Navbar> 
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </LinkContainer>  
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="expired"> 
                        <NavItem>Expired</NavItem> 
                    </LinkContainer> 
                    <LinkContainer to="completed"> 
                        <NavItem>Completed</NavItem> 
                    </LinkContainer>  
                    <LinkContainer to="about"> 
                        <NavItem>About</NavItem> 
                    </LinkContainer> 
                </Nav> 
            </Navbar>
           
        ) 
    }
} 

export default Navigate