import React from "react";
import {useForm} from "react-hook-form";
import Input from "../components/Input";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = data => {
        goPersonalAccount()
        reset()
    }

    const navigate = useNavigate()
    const goPersonalAccount = () => {
        navigate('/account')
    }
    return (
            <form onSubmit={handleSubmit(onSubmit)} className='px-8 pt-6 pb-8 mb-2'>
                <div className='mb-4'>
                    <Input type='login'
                           label='Введите логин'
                           placeholder="Введите логин"
                           classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                           classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                           {...register('login', {
                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 5,
                                   message: "Пароль должен состоять не менее чем из 5 символов"}
                           })}
                    />
                    {errors.login && <span className='pl-2 text-red-500 text-sm'>{errors.login.message || "Необходимо ввести логин"}</span>}
                </div>
                <div>
                    <Input
                        label='Введите пароль'
                        type='password'
                        placeholder='Введите пароль'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        {...register("password", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Пароль должен состоять не менее чем из 5 символов"}
                        })}
                    />
                    {errors.password && <span className="pl-2 text-red-500 text-sm">{errors.password.message || "Необходимо ввести пароль"}</span>}
                </div>
                <div className="flex items-center justify-between mt-7">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Забыли пароль
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type='submit'
                    >
                        Войти
                    </button>
                </div>
            </form>
    )
}

export default Login