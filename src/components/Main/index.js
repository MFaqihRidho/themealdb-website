import { Component } from "react";
import MainCard from "../main-card";
import SearchBar from "../search bar";
import Country from '../country list'
import Category from "../category list"
import Alphabet from "../alphabet list"
import './style.css'
import {RootContext} from '../../pages/home/'

class Main extends Component {
    render(){
        return(
            <RootContext.Consumer>    
                {
                    value => {
                        let Card;
                        window.onload = () => {
                            value.dispatch({type:"RANDOM_MEALS"})
                        };
                        if((value.state.card.strMeal !== 'ERROR') && (value.state.card.strMeal !== 'Fill the search field first')){
                            Card = <MainCard/>
                        }else{
                            Card = <h1 className="text-white">Not Found</h1>
                        }
                        return(
                            <section id="main">
                                <div className="container main-container flex-column d-flex text-center justify-content-center">
                                    <h1 className="main-title my-5">Find or Get some Random Meal</h1>
                                    <SearchBar></SearchBar>
                                    {Card}
                                    <h1 className="second-title my-5">Browse By Country</h1>
                                    <Country/>
                                    <h1 className="second-title my-5">Browse By Category</h1>
                                    <Category/>
                                    <h1 className="second-title my-5">Browse By First Letter</h1>
                                    <Alphabet/>
                                </div>
                            </section>   
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Main