import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../../store/isloggedin";
import {setUserName} from "../../store/login";

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const name = useSelector((state) => state.user.name)
    const isLoggedIn = useSelector((state) => state.checkIn.value)
    const gotOut = () => {
        localStorage.removeItem('token')
        dispatch(setIsLoggedIn(false))
        dispatch(setUserName(''))
        navigate('/')
    }
    console.log(isLoggedIn)
    return (
        <header className="bg-blue-500 h-10 flex items-center justify-between">
            <NavLink to='/' className='text-sm pl-10 text-xl font-medium text-white'>@Mredings</NavLink>
            <div className='pr-3 pl-10 text-lg font-medium text-white'>
                {name}
                {isLoggedIn && <button onClick={gotOut} className='ml-2 hover:text-blue-200 focus:outline-none focus:shadow-outline'>Выход</button>}
            </div>
        </header>
    )
}

export default Header