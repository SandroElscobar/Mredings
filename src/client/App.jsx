import React, {useState} from "react";
import './style.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import MainLK from "./WindowLK/MainLK";
import RecoverPassword from "./Login/RecoverPassword";
import Header from "./header/Header";

const App = () => {
    return (
        <div className='h-screen flex flex-col justify-between'>
            <Header/>
            <main>
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