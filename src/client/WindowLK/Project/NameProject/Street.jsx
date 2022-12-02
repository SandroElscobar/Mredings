import React from "react";
import {AiOutlinePlus} from "react-icons/ai";
import CreateCity from "../CreateCity";
const Street = ({street}) => {
    return (
        <ul className="absolute top-0 h-full w-full px-1 bg-blue-200">
            {street && street.map((street) => {
                return (
                    <li key={street.id}
                        className='text-lg font-medium hover:text-blue-400 active:text-blue-800 border-4 rounded-lg border pl-4 my-1 px-4 cursor-pointer bg-white flex justify-between items-center'
                    >
                        <span>{street.name}</span>
                        <AiOutlinePlus
                            onClick={() => setIsOpenStreet(true)}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

export default Street