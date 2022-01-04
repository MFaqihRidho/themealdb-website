import Navigation from "../../components/navbar"
import Header from "../../components/header"
import Main from '../../components/Main/index'
import Footer from '../../components/footer'
import {createContext,Component} from "react"
import {searchMeals,randomMeals} from '../../config/index'

export const RootContext = createContext()
const Provider = RootContext.Provider;

class Home extends Component {
    state={
        card:{
            
        },
    }

    dispatch = (action,keyword) => {
        if(action.type === 'SEARCH_MEALS'){
            searchMeals(keyword).then(results => {
                this.setState({
                    card: results.meals[0]
                })
            }).catch(err => {
                this.setState({
                    card: {strMeal : 'ERROR'}
                })
            })
        }
        if(action.type === "RANDOM_MEALS"){
            randomMeals().then(results => {
                this.setState({
                    card: results.meals[0]
                })
            }).catch(err => {
                this.setState({
                    card: {strMeal : 'ERROR'}
                })
            })
        }
        if(action.type === "NONE_MEALS"){
            this.setState({
                card: {strMeal : "Fill the search field first"}
            })
        }
    }

    componentDidMount() {
        this.dispatch({type:"RANDOM_MEALS"})
    }

    render(){
        return(
            <Provider value={{
                state: this.state,
                dispatch: this.dispatch
            }}>
                <div>
                    <Navigation/>
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </Provider>
        )
    }
}

export default Home;