import React from "react";
import './style.css'
import {Routes, NavLink, Route} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import MainLK from "./WindowLK/MainLK";
import {useDispatch, useSelector} from "react-redux"
import RecoverPassword from "./Login/RecoverPassword";


const App = () => {
    const user = useSelector(state => state.user.name)

    console.log(user)
    return (
        <div className='h-screen flex flex-col justify-between'>
            <header className="bg-blue-500 h-10 flex items-center justify-between">
                <NavLink to='/' className='text-sm pl-10 text-xl font-medium text-white'>@Mredings</NavLink>
                <div className='pr-3 pl-10 text-lg font-medium text-white'>
                    {user || "Пользователь"}
                </div>
            </header>
            <main className="">
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='recoverpassword' element={<RecoverPassword/>}/>
                    <Route path='account' element={<MainLK/>}/>
                </Routes>
            </main>
            <footer className='bg-blue-500 h-10 flex items-center'>
                <h2 className='text-white pl-10 font-medium'>Сделано ООО "ГЛОНАСС-СЕРВИС"</h2>
            </footer>
        </div>
    )
}

export default App