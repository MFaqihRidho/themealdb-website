import Navbar from 'react-bootstrap/Navbar'
import { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import '../../assets/font/fonts.css'

class Navigation extends Component {
    mainResponsive = () => {
        document.getElementById('main').classList.toggle('open')
    }

    render(){
        return (
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                <Navbar.Brand>Meal Finder</Navbar.Brand>
                <Navbar.Toggle onClick={this.mainResponsive} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className="mx-3 Home">Home</Nav.Link>
                    <Nav.Link className="mx-3" href='#main'>Search Meals</Nav.Link>
                    <Nav.Link className="mx-3" href='#browse'>Browse Meals</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;