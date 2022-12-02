import React from "react";
const Street = ({street}) => {
    return (
        <ul className="absolute top-0 h-full w-full px-1 bg-blue-200">
            {street && street.map((street) => {
                return (
                    <li key={street.id}
                        className='text-lg font-medium hover:text-blue-400 active:text-blue-800 border-4 rounded-lg border pl-4 my-1 px-4 cursor-pointer bg-white'
                    >
                        {street.name}
                    </li>
                )
            })}
        </ul>
    )
}

export default Street