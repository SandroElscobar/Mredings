import React from "react";
import './style.css'
import {Routes, NavLink, Route} from "react-router-dom";
import Login from "./Login/Login";
import LogReg from "./Login/LogReg";
import Register from "./Login/Register";
import RecoverPassword from "./Login/RecoverPassword";
import MainLK from "./WindowLK/MainLK";

const App = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <header className="bg-blue-500 h-10 flex items-center justify-between">
                <NavLink to='/' className='text-sm pl-10 text-xl font-medium text-white'>@Mredings</NavLink>
                <div className='pr-3 pl-10 text-lg font-medium text-white'>Альховой А.В.</div>
            </header>
            <main className="">
                <Routes>
                    <Route path='/' element={<LogReg/>}>
                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>
                    </Route>
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