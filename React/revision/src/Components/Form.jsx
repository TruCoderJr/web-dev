import React from "react";
import {useForm} from "react-hook-form"

function Form({handleForm}) {

    const {register, handleSubmit, reset} = useForm();
    const handleFormSubmit = (data)=>{
        handleForm(data);
        reset();
    }
    return(
        <div className="mt-10 flex gap-10 justify-center">
            <form onSubmit={handleSubmit(handleFormSubmit)} className="flex gap-10" action="">
                <input {...register('name')} className='rounded-md  px-2 py-1  text-base  font-semibold  outline-none' placeholder="Name"  type="text" />
                <input {...register('email')} className='rounded-md  px-2 py-1  text-base  font-semibold  outline-none' placeholder="Email"  type="text" />
                <input {...register('img')} className='rounded-md  px-2 py-1  text-base  font-semibold  outline-none' placeholder="Image URL"  type="text" />
                <input className='rounded-md  px-5 py-1  bg-blue-500  text-white  font-semibold' placeholder=""  type="submit" />
            </form>
        </div>
    );
}


export default Form;