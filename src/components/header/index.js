import { Component } from "react";
import Button from '../atoms/button/index'
import hero from '../../assets/img/header.jpg'
import Container from 'react-bootstrap/Container'
import './style.css'

class Header extends Component{ 
    scrollToMain = () => {
        document.getElementById('main').scrollIntoView({behavior: "smooth"})
    }

    render(){
        return(
            <div>
                <img className="hero" src={hero} alt="" />
                <Container>
                    <div className="tagline d-flex flex-column justify-content-center align-items-center">
                        <h1 className='header'>Welcome to Meal Finder</h1>
                        <p className="sub-header" >This Website Using TheMealDB API</p>
                        <Button title="Find Meal" onClick={this.scrollToMain} ></Button>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header;