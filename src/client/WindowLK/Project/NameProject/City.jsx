import React, {useState} from "react";
import {Link} from "react-router-dom";
import CreateCity from "../Create/CreateCity";
import {AiOutlinePlus} from "react-icons/ai";

const City = ({data, onClick}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='w-[300px] h-full border-2 border-sky-600 items-stretch relative bg-blue-200'>
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
                <ul className='px-1'>
                    {data && data.map((city) => {
                        return (
                            <Link
                                to={city.name}
                                key={city.id}
                            >
                                <li
                                    onClick={(evt) => onClick(evt, city)}
                                    className='text-lg font-medium hover:text-blue-400 active:text-blue-800 border-4 rounded-lg border pl-4 my-1 bg-white'
                                >
                                    {city.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default City