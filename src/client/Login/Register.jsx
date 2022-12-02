import React from "react";
import {useForm} from "react-hook-form";
import Input from "../components/Input";
import {gql, useMutation} from "@apollo/client"
import {useNavigate} from "react-router-dom";
import {SET_USER} from "../API/api_mutation";



const Register = () => {
    const navigate = useNavigate()
    const goToLogin = () => navigate('/')
    const [createUser, {loading, error}] = useMutation(SET_USER, {
        onCompleted: data => {
            localStorage.setItem("token", data.createUser)
            goToLogin()
        }
    })
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onBlur'
    })
    const onSubmit = data => {
        createUser({variables: {name: data.name, email: data.email, password: data.password}})
        reset()
    }
    if (loading) return 'loading...'
    if (error) return `Произошла ошибка отправки ${error.message}`

    return (
        <div className='max-w-2xl m-auto border-2 rounded-t-2xl'>
            <form className='px-8 pt-6 pb-8 mb-2' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <div className='text-2xl mb-3 font-medium'>
                        <h2 className='text-center'>Регистрация нового пользователя</h2>
                    </div>
                    <Input
                        label='Введите ФИО'
                        type='name'
                        placeholder='Введите ФИО'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('name', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Поле должно содержать более 2 символов"
                            }
                        })}
                    />
                    {errors.name && <span className='pl-2 text-red-500 text-sm'>{errors.name.message || "Необходимо ввести ФИО"}</span>}
                </div>
                <div className="mb-4">
                    <Input
                        label='Введите электронную почту'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Введите пароль'
                        type='email'
                        {...register('email', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Поле должно содержать более 2 символов"
                            }
                        })}
                    />
                    {errors.email&& <span className='pl-2 text-red-500 text-sm'>{errors.email.message || "Необходимо ввести пароль"}</span>}
                </div>
                <div className="mb-4">
                    <Input
                        label='Введите пароль'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        name='password'
                        placeholder='Подтвердите пароль'
                        {...register('password', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Поле должно содержать более 2 символов"
                            }
                        })}
                    />
                    {errors.password && <span className='pl-2 text-red-500 text-sm'>{errors.password.message || "Необходимо подтвердить пароль"}</span>}
                </div>
                <div className="flex items-center justify-between mt-7">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type='submit'>
                        Зарегестрироваться
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Register