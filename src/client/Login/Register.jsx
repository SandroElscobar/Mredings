import React from "react";
import {useForm} from "react-hook-form";
import Input from "../components/Input";

const Register = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onBlur'
    })
    const onSubmit = data => {
        console.log(data)
        reset()
    }
    return (
            <form className='px-8 pt-6 pb-8 mb-2' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <Input
                        label='Введите электронну почту'
                        type='email'
                        placeholder='Введите электронную почту'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        {...register('email', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Поле должно содержать более 2 символов"
                            }
                        })}
                    />
                    {errors.email && <span className='pl-2 text-red-500 text-sm'>{errors.email.message || "Необходимо ввести логин"}</span>}
                </div>
                <div className="mb-4">
                    <Input
                        label='Введите пароль'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Введите пароль'
                        type='password'
                        {...register('password', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Поле должно содержать более 2 символов"
                            }
                        })}
                    />
                    {errors.password && <span className='pl-2 text-red-500 text-sm'>{errors.password.message || "Необходимо ввести пароль"}</span>}
                </div>
                <div className="mb-4">
                    <Input
                        label='Подтвердите пароль'
                        classNameLabel='block text-gray-700 text-sm font-bold mb-2'
                        classNameInput='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='password'
                        name='twopassword'
                        placeholder='Подтвердите пароль'
                        {...register('twopassword', {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 2,
                                message: "Поле должно содержать более 2 символов"
                            }
                        })}
                    />
                    {errors.twopassword && <span className='pl-2 text-red-500 text-sm'>{errors.twopassword.message || "Необходимо подтвердить пароль"}</span>}
                </div>
                <div className="flex items-center justify-between mt-7">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type='submit'>Зарегестрироваться</button>
                </div>
            </form>
    )
}

export default Register