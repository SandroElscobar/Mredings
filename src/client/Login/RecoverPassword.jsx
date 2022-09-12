import React from "react";
import Input from "../components/Input";

const RecoverPassword = () => {
    return (
        <div className='max-w-2xl mx-auto border-2 rounded-t-2xl transition'>
            <form className='px-8 pt-6 pb-8 mb-2'>
                <div className='text-2xl mb-2 font-medium'>
                    <h2 className='text-center'>Востановление пароля</h2>
                </div>
                <Input
                    label='Введите логин'
                    classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                    classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2'
                    type='login'
                    placeholder='Введите логин'
                />
                <Input
                    label='Введите электронну. почту'
                    classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                    classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2'
                    type='email'
                    placeholder='Введите электронную почту'
                />
                <div className="flex items-center justify-between mt-7">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type= "submit"
                    >
                        Востановить пароль
                    </button>
                </div>
            </form>
        </div>

    )
}

export default RecoverPassword