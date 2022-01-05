import Card from 'react-bootstrap/Card'
import Button from '../atoms/button'
import {RootContext} from '../../pages/home/'
import { useNavigate } from 'react-router-dom';
import './style.css'

function MainCard(){
        let navigate = useNavigate();
        return(
            <RootContext.Consumer>
                {
                    value => {
                        const {strMealThumb,strMeal,idMeal,strArea,strCategory,strInstructions,strYoutube,strTags,
                        } = value.state.card

                        let ingredients = [];
                        let measurements = [];
                        let results = [];

                        Object.entries(value.state.card).forEach(([key, value]) => {
                            if(key.includes('strIngredient')){
                                if(value){
                                    if(value !== undefined){
                                        ingredients.push(value)
                                    }
                                }
                            }
                            if(key.includes('strMeasure')){
                                if(value){
                                    if(value !== " "){
                                        measurements.push(value)
                                    }
                                }
                            }
                        });
                        for(var i=0; i < measurements.length; i++){
                            results.push(([measurements[i],ingredients[i]]))
                        }
                        console.log(results)

                        return(
                            <Card>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <Card.Img className='card-img' variant="top" src={strMealThumb} />
                                        <Card.Body>
                                            <Card.Title>{strMeal}</Card.Title>
                                            <Card.Text>
                                                From <b>{strArea}</b>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="col-md-8">
                                        <Card.Body className="d-flex flex-column align-items-center">
                                            <Card.Text>
                                                {`Category : ${strCategory}`}
                                                <br />
                                                {`Tags : ${strTags ? strTags : "None"}`}
                                            </Card.Text>
                                            <Card.Text>{
                                                `
                                                Ingredients : 
                                                ${results.map(i => ` ${i[0]} ${i[1]} `)}
                                                `
                                            }</Card.Text>
                                            <Card.Text>How To Make it : {strInstructions}</Card.Text>
                                            <Card.Link target="_blank" href={strYoutube}>See Youtube Tutorials</Card.Link>
                                            <Button id={idMeal} onClick={(e) => navigate(`/detail/${e.target.id}`)} className="details" title='Details'></Button>
                                        </Card.Body>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                }
            </RootContext.Consumer> 
        )
            }

export default MainCard;
