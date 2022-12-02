import React, {useEffect, useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import CreateCity from "./CreateCity";
import {useQuery} from "@apollo/client";
import GET_CITY from "../../API/api_query";
import {Route, Routes} from "react-router-dom";
import City from "./NameProject/City";
import Street from "./NameProject/Street";
import {useSelector} from "react-redux";

const Project = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {loading, error, data} = useQuery(GET_CITY)
    const street = useSelector(state => state.street)
    if (loading) return "Loading"
    if (error) return `${error.message}`
    return (
        <div className='w-[300px] border-2 border-sky-600 items-stretch relative bg-blue-200'>
            <CreateCity
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div className=' flex justify-between py-[5px] px-[5px] border-b-2 bg-blue-300 border-sky-900'>
                <h2 className='text-center font-bold'>Наименование проекта</h2>
                <span className='flex items-center active:bg-sky-800'>
                    <AiOutlinePlus className='hover:fill-blue-600 hover:cursor-pointer hover:w-[1.5em] hover: h-[1.5em]' onClick={()=> setIsOpen(true)}/>
                </span>
            </div>
            <div className='py-[5px] relative '>
                <City data={data.city}/>
                <Routes>
                    <Route path=":city" element={<Street street={street.street}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Project