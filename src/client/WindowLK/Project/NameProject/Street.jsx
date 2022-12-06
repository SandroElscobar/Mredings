import React, {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {useQuery} from "@apollo/client";
import {GET_STREET} from './../../../API/api_query'
import CreateStreet from "../Create/CreateStreet";
const Street = () => {
    const [isOpenStreet, setIsOpenStreet] = useState(false)
    const street = JSON.parse(localStorage.getItem('city'))
    const {data, error, loading, refetch} = useQuery(GET_STREET, {
            variables: {getStreetId: street.id, name: street.name}
        })
    if (loading) return `Loading...`
    if (error) return console.log(error.message)
    return (
        <div className='absolute top-0 h-full w-full bg-blue-200 border-2 border-sky-600 items-stretch'>
            <CreateStreet
                isOpenStreet={isOpenStreet}
                setIsOpenStreet={setIsOpenStreet}
                refetch={refetch}

            />
            <div className='flex justify-between py-[5px] px-[5px] border-b-2 bg-blue-300 border-sky-900'>
                <h2 className='text-center font-bold'>Наименование улицы</h2>
                <span className='flex items-center active:bg-sky-800'>
                    <AiOutlinePlus className='hover:fill-blue-600 hover:cursor-pointer hover:w-[1.5em] hover: h-[1.5em]' onClick={()=> setIsOpenStreet(true)}/>
                </span>
            </div>
            <ul className='py-[5px] px-1'>
                {data && data.getStreet.street.map((street) => {
                    return (
                        <li key={street.id}
                            className='text-lg font-medium hover:text-blue-400 active:text-blue-800 border-4 rounded-lg border pl-4 my-1 px-4 cursor-pointer bg-white flex justify-between items-center'
                        >
                            {street.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Street