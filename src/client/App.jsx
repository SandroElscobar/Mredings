import React from "react";
import './style.css'
import {Routes, Route} from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Login/Register";
import MainLK from "./WindowLK/InfoDevise/MainLK";
import RecoverPassword from "./Login/RecoverPassword";
import Header from "./header/Header";
import Street from "./WindowLK/Project/NameProject/Street";

const App = () => {
    return (
        <div className='h-screen'>
            <Header clasName='bg-blue-500 h-[5%] flex items-center justify-between'/>
            <main className='h-[90%]'>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='recoverpassword' element={<RecoverPassword/>}/>
                    <Route path='account/*' element={<MainLK/>}/>
                </Routes>
            </main>
            <footer className='bg-blue-500 h-[5%] flex items-center w-full'>
                <h2 className='text-white pl-10 font-medium'>Сделано ООО "ГЛОНАСС-СЕРВИС"</h2>
            </footer>
        </div>
    )
}

export default App