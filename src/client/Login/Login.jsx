import React from "react";
import {useForm} from "react-hook-form";
import Input from "../components/Input";
import {NavLink, useNavigate} from "react-router-dom";
import {gql, useMutation} from "@apollo/client";
import {useDispatch} from "react-redux";
import {authUser} from "../../utils/authUser";
import {setUserName} from "../../store/login";
import {setIsLoggedIn} from "../../store/isloggedin";

const LOG_IN = gql`
    mutation Mutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password)
    }
`

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[signIn, {error, loading}] = useMutation(LOG_IN, {
        onCompleted: data => {
            localStorage.setItem('token', data.signIn)
            dispatch(setUserName(authUser(data.signIn)))
            dispatch(setIsLoggedIn(true))
            navigate('account')
        }
    })
    const onSubmit = data => {
        signIn({variables:{email: data.email, password: data.password}})

    }
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

    const goToRegister = (evt) => {
        evt.preventDefault()
        navigate('register')
    }
    return (
        <div className='max-w-2xl m-auto border-2 rounded-t-2xl'>
            <form onSubmit={handleSubmit(onSubmit)} className='px-8 pt-6 pb-8 mb-2'>
                <div className='text-2xl mb-5 font-medium'>
                    <h2 className='text-center'>Личный кабинет</h2>
                </div>
                <div className='mb-4'>
                    <Input type='email'
                           label='Введите логин'
                           placeholder="Введите логин"
                           classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                           classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                           {...register('email', {
                               required: "Поле обязательно к заполнению",
                               minLength: {
                                   value: 5,
                                   message: "Пароль должен состоять не менее чем из 5 символов"}
                           })}
                    />
                    {errors.email && <span className='pl-2 text-red-500 text-sm'>{errors.email.message || "Необходимо ввести логин"}</span>}
                </div>
                <div className='pb-5'>
                    <Input
                        label='Введите пароль'
                        type='password'
                        placeholder='Введите пароль'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
                        {...register("password", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Пароль должен состоять не менее чем из 5 символов"}
                        })}
                    />
                    {errors.password && <span className="pl-2 text-red-500 text-sm">{errors.password.message || "Необходимо ввести пароль"}</span>}
                </div>
                <span className='block'>
                        Для востановления пароля нажмите
                        <NavLink
                            to='recoverpassword'
                            className={({isActive}) => isActive ? 'text-blue-400' : 'text-sky-600'}
                        > Забыл пароль
                        </NavLink>
                    </span>
                <div className="flex items-center justify-between mt-7">
                    <button onClick={(evt) => goToRegister(evt)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Регистрация
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type='submit'
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Login