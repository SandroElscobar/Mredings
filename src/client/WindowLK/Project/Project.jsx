import React from "react";
import City from "./NameProject/City";
import {useQuery} from "@apollo/client";
import {GET_CITY} from "../../API/api_query";
import Street from "./NameProject/Street";
import {Routes, Route} from 'react-router-dom'



const Project = () => {
    const {loading, error, data} = useQuery(GET_CITY)
    if (loading) return "Loading"
    if (error) return console.log(error.message)
    const handlerClick = (evt, city) => {
        localStorage.setItem('city', city.id)
    }
    return (
            <div className='relative'>
                <City data={data.city} onClick={handlerClick}/>
                <Routes>
                    <Route path='/:city' element={<Street/>}/>
                </Routes>
            </div>
    )
}

export default Project