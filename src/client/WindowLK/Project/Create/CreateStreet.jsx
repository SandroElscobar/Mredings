import React, {useState} from "react";
import {AiFillCloseCircle} from "react-icons/ai";
import Input from "../../../components/Input";
import {SET_STREET} from "../../../API/api_mutation";
import {useMutation} from "@apollo/client";


const CreateStreet = ({isOpenStreet, setIsOpenStreet, refetch}) => {
    const [setStreet, {error, loading}] = useMutation(SET_STREET)
    const [value, setValue] = useState('')
    if (error) return console.log(error.message)
    if (loading) return "Loading..."
    const onChange = (evt) => {
        evt.preventDefault()
        setValue(evt.target.value)
    }

    const handlerCreateStreet = (evt) => {
        evt.preventDefault()
        setStreet({variables: {id: localStorage.getItem('city'), name: value}}).then(() => console.log("Успешно"))
    }
    return (isOpenStreet &&
        <div className='max-w-2xl border-2 rounded-lg border-blue-500 absolute right-[-300px] bg-white'>
            <div className='absolute right-[-15px] top-[-15px]'><AiFillCloseCircle onClick={() => setIsOpenStreet(false)} size={30} color='blue' className='hover:fill-amber-400 overflow-hidden stroke-lime-700 hover:cursor-pointer rounded-[50%] bg-white'/></div>
            <form className='p-3' onSubmit={handlerCreateStreet}>
                <div className='mb-3'>
                    <Input
                        label="Выберите улицу"
                        placeholder='Таврическая ...'
                        type='text'
                        value={value}
                        classNameLabel='block mb-2 font-medium'
                        classNameInput=' px-2 border-2 rounded w-full'
                        onChange={onChange}
                    />
                </div>
                <div className='flex justify-end'>
                    <button
                        className='font-medium border-2 rounded-lg border-blue-500 px-2 py-1 hover:bg-blue-500 hover:text-white active:bg-blue-900'
                        type='submit'>
                        Создать
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateStreet