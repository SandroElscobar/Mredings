import React from "react";

const RecoverPassword = () => {
    return (
        <form>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Введите электронную почту</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   id="email"
                   type="email"
                   placeholder="Введите электронную почту" />
            <div className="flex items-center justify-between mt-7">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type= "submit"
                >
                    Востановить пароль
                </button>
            </div>
        </form>
    )
}

export default RecoverPassword