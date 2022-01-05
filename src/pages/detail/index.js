import {useParams} from "react-router-dom"
import React, { useState,useEffect } from 'react';
import {detailMeals} from '../../config'
import './style.css'

function Detail () {
    const [data,setData] = useState([])
    let params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            await detailMeals(params.id).then(results => {
                    setData(results.meals[0])
            })
        }
        fetchData()
    },[params.id]);

    const {strMeal,strMealThumb,strArea,strInstructions,strYoutube,strTags,strCategory} = data;
    let ingredients = [];
    let measurements = [];
    let results = [];
    let tags;
    let link;
    let category;
    if(strTags){
        tags = <p>Tags : <b>{strTags}</b></p>
    }
    if(strCategory){
        category = <p>Category : <b>{strCategory}</b></p>
    }
    if(strYoutube){
        link = strYoutube.replace("watch?v=",'embed/');
    }
    Object.entries(data).forEach(([key, value]) => {
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

    return(
        <main className="detail-container text-white">
            <h1 className="title text-center my-4">Meals Details</h1>
            <div className="container">
                <div className="row text-center">
                    <div className="title-container col-lg-6">
                        <h3 className="mt-4" >{strMeal}</h3>
                        <p className="mb-4">From : <b>{strArea}</b> {category} {tags} </p>
                        <img className="meal-thumb" src={strMealThumb} alt="" />
                    </div>
                    <div className="ingredients-container col-lg-6">
                        <h3 className="my-4">Ingredients</h3>
                        <div className="img-container d-grid">
                                {results.map(i => (
                                    <div>
                                        <img src={`https://www.themealdb.com/images/ingredients/${i[1]}-Small.png`} alt="" />
                                        <p>{`${i[0]} ${i[1]}`}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="row instructions mx-auto text-center my-4">
                    <h3 className="my-4">How To Make it</h3>
                    <p>{strInstructions}</p>
                </div>
                <div className="row mx-auto text-center my-4">
                    <h3 className="my-4">Youtube Videos</h3>
                    <div className="iframe-container">
                        <iframe width="1280" height="720" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <a href={strYoutube} target="_blank" rel="noreferrer">Or Click Here to watch the video</a>   
                </div>
            </div>
        </main>
    )
    
}

export default Detail