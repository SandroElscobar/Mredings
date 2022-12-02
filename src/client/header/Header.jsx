import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsLoggedIn} from "../../store/isloggedin";
import {setUserName} from "../../store/login";


const Header = ({clasName}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const name = useSelector((state) => state.user.name)
    const isLoggedIn = useSelector((state) => state.checkIn.value)
    const isUser = !!localStorage.getItem('token')
    const gotOut = () => {
        localStorage.removeItem('token')
        dispatch(setIsLoggedIn(false))
        dispatch(setUserName(''))
        navigate('/')
    }
    const onClick = () => {
        if (localStorage.getItem('token')) return navigate('account')
        else {return navigate('/')}
    }

    return (
        <header className={clasName}>
            <NavLink to={isUser ? 'account' : '/'} className='text-sm pl-10 text-xl font-medium text-white'>@Mredings</NavLink>
            <div className='pr-3 pl-10 text-lg font-medium text-white'>
                {name}
                {isLoggedIn && <button onClick={gotOut} className='ml-2 hover:text-blue-200 focus:outline-none focus:shadow-outline'>Выход</button>}
            </div>
        </header>
    )
}

export default Header