import {useParams} from "react-router-dom"
import React, { useState,useEffect } from 'react';
import {mealListByCountry,mealListByCategory,categoryList,countryList,mealListByAlphabet} from '../../config'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from '../../components/atoms/button'
import { useNavigate } from 'react-router-dom';
import './style.css'

function List(){
    let navigate = useNavigate();
    let params = useParams();
    let failed
    let success  
    const [data,setData] = useState([])
    const [country,setCountry] = useState([])
    const [category,setCategory] = useState([])
    const alpha = Array.from(Array(26)).map((e, i) => i + 65)
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    useEffect( () => {
        async function fetchCountryList(){
            await countryList().then(result => {
            setCountry(result.meals)
        })}
        async function fetchCategoryList(){ 
            await categoryList().then(result => {
            setCategory(result.categories)
        })}
        fetchCountryList()
        fetchCategoryList()

        const fetchDataAlphabet = async () => await mealListByAlphabet(params.id).then(results => {
            setData(results.meals)
        }).catch(err => console.log(err))
        alphabet.map(data => data.toLowerCase() === params.id ? fetchDataAlphabet() : null)
    },[alphabet,params.id]);
    
    useEffect(() => {
        const fetchDataCountry = async () => await mealListByCountry(params.id).then(results => {
            setData(results.meals)
        })
        if((params.id).length > 1){
            country.map(data => data.strArea.includes(params.id) ?  fetchDataCountry() : null)
        }
    },[country,params.id])

    useEffect(() => {
        const fetchDataCategory = async () => await mealListByCategory(params.id).then(results => {
            setData(results.meals)
        })
        if((params.id).length > 1){
            category.map(data => data.strCategory.includes(params.id) ?  fetchDataCategory() : null)
        }
    },[category,params.id]);

    if(data){
        success = data.map(data => (
            <Card>
                <Card.Img variant="top" src={data.strMealThumb} />
                <Card.Body>
                <Card.Title className="text-center">{data.strMeal}</Card.Title>
                </Card.Body>
                <Button id={data.idMeal} onClick={(e) => navigate(`/detail/${e.target.id}`)} title='Details'></Button>
            </Card>
        ))
    }else{
        failed = <h1 className="text-center">Not Found</h1>
    }
    
    return(
        <main className="meal-list text-white">
            <div className="container">
                <h1 className="text-center mb-5 fw-bold">Meal List</h1>
                <CardGroup>
                    {success}
                </CardGroup>
                {failed}
            </div>
        </main>
    )
}

export default List