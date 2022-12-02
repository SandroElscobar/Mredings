import React, {useState} from "react";
import Input from "../../components/Input";
import {AiFillCloseCircle} from 'react-icons/ai'
import {useMutation} from "@apollo/client";
import {useDispatch} from "react-redux";
import {CREATE_CITY} from "../../API/api_mutation";
import GET_CITY from "../../API/api_query";


const CreateCity = ({isOpen, setIsOpen,}) => {
    const dispatch = useDispatch()
    const [createCity, {error, loading}] = useMutation(CREATE_CITY, {
        refetchQueries: [{query: GET_CITY}]
    })
    const [value, setValue] = useState('')
    const onChange = (evt) => {
        evt.preventDefault()
        setValue(evt.target.value)
    }
    const handlerCreateCity = (evt) => {
        evt.preventDefault()
        createCity({variables: {name: value}})
        setValue('')
        setIsOpen(false)
    }
    if (loading) return 'Loading...'
    if (error) return console.log(error)
    return (isOpen &&
        <div className='max-w-2xl border-2 rounded-lg border-blue-500 absolute right-[-300px] bg-white'>
            <div className='absolute right-[-15px] top-[-15px]'><AiFillCloseCircle onClick={() => setIsOpen(false)} size={30} color='blue' className='hover:fill-amber-400 overflow-hidden stroke-lime-700 hover:cursor-pointer rounded-[50%] bg-white'/></div>
            <form className='p-3' onSubmit={handlerCreateCity}>
                <div className='mb-3'>
                    <Input
                        label="Наименование проекта"
                        placeholder='Наименование'
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

export default CreateCity