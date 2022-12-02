import React, {useEffect, useState} from "react";
import City from "./NameProject/City";
import {useQuery} from "@apollo/client";
import GET_CITY from "../../API/api_query";



const Project = () => {
    const {loading, error, data} = useQuery(GET_CITY)
    if (loading) return "Loading"
    if (error) return `${error.message}`
    // const street = (data) => {
    //
    // }
    return (
            <div className='relative'>
                <City data={data.city}/>
            </div>
    )
}

export default Project