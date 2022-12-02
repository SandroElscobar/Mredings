import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setStreet} from "../../../../store/street";

const City = ({data}) => {
    const dispatch = useDispatch()
    return (
        <ul className='px-1'>
            {data && data.map((city) => {
                return (
                    <Link
                        to={city.name}
                        key={city.id}
                    >
                        <li
                            onClick={() => dispatch(setStreet(city.street))}
                            className='text-lg font-medium hover:text-blue-400 active:text-blue-800 border-4 rounded-lg border pl-4 my-1 bg-white'
                        >
                            {city.name}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default City