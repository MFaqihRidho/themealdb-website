import { Component } from "react";
import Button from '../atoms/button/index'
import './style.css'
import Form from 'react-bootstrap/Form'

import {RootContext} from '../../pages/home'

class SearchBar extends Component {

    state={
        value: ''
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    render(){
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return(
                            <div className="container form-container mb-5 d-grid mt-3">
                                <Form.Control
                                value={this.state.value}
                                onChange={(e) => this.handleChange(e)}
                                placeholder="Find Meal"
                                aria-label="Find Meal"
                                aria-describedby="basic-addon2"
                                />
                                    <Button onClick={() => {
                                        if(this.state.value !== ''){
                                            value.dispatch({type:"SEARCH_MEALS"},this.state.value)
                                        }else{
                                            value.dispatch({type:"NONE_MEALS"})
                                        }
                                        }} title='Search'></Button>
                                    <Button onClick={() => value.dispatch({type:"RANDOM_MEALS"})} title='Random'></Button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default SearchBar;