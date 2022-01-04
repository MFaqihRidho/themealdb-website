import {categoryList} from '../../config'
import React, { useState,useEffect } from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from '../../components/atoms/button'
import { useNavigate } from 'react-router-dom';
import './style.css'

function Category(){
    let navigate = useNavigate();
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await categoryList().then(results => {
                    setData(results.categories)
            })
        }
        fetchData()
    },[]);
    return(
        <div className="container text-white">
            <CardGroup>
                {data.map(data => (
                        <Card>
                            <Card.Img variant="top" src={data.strCategoryThumb} />
                            <Card.Body>
                            <Card.Title className="text-center">{data.strCategory}</Card.Title>
                                {/* <Card.Text>
                                    {data.strCategoryDescription}
                                </Card.Text> */}
                            </Card.Body>
                            <Button id={data.strCategory} className='category-btn' onClick={(e) => navigate(`/list/${e.target.id}`)} title='Details'></Button>
                        </Card>
                ))}
            </CardGroup>
        </div>
    )
}

export default Category