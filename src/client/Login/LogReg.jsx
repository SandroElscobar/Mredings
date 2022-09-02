import React from "react";
import {NavLink, Outlet} from "react-router-dom";

// w-1/3 flex mx-auto my-auto
const activeTitle = 'p-2 hover:text-blue-600 block w-1/2 text-center'

const LogReg = () => {
    return (
        <div className='w-1/3 mx-auto rounded-xl border-4 border-solid'>
            <div className='flex w-full'>
                <NavLink className={({isActive}) => isActive ? `${activeTitle} border-sky-500 border-b-4` : activeTitle}
                         to='login'
                >
                    Вход в личный кабинет
                </NavLink>
                <span className='block h-11 border-solid border-2 w-1'></span>
                <NavLink
                    className={({isActive}) => isActive ? `${activeTitle} border-sky-500 border-b-4` : activeTitle}
                    to='register'
                >
                    Регистрация
                </NavLink>
            </div>
            <div className='w-full'>
                    <Outlet/>
            </div>
        </div>
    )
}

export default LogReg