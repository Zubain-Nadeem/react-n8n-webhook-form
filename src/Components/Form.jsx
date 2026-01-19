import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({})

    const handleOnChange = (e) => {
        const {name , value} = e.target
        setForm({
            ...form,
            [name] : name === 'age' ? Number(value) : value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('https://zubaind5.app.n8n.cloud/webhook/User-Form' , {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(form)
        });

        alert('Form Submitted')
    }
    return (
        <section className='flex items-center justify-center w-full h-screen bg-blue-200'>

             
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-10 shadow-2xl rounded-2xl shadow-black  '>
                <input type="text" name='name' placeholder='Whats Your name' onChange={handleOnChange} className='border  border-black px-2 py-4 rounded-lg w-sm outline-none' />
                <input type="number" name='age' placeholder='Whats Your age' onChange={handleOnChange} className='border  border-black px-2 py-4 rounded-lg w-sm outline-none' />
                <input type="email" name='email' placeholder='Enter Your email' onChange={handleOnChange} className='border border-black px-2 py-4 rounded-lg w-sm outline-none' />
                <input type="tel" name='phone' placeholder='Enter Your phone' onChange={handleOnChange} className='border border-black px-2 py-4 rounded-lg w-sm outline-none' />
                <button className='  px-4 py-3 bg-blue-600 text-white text-xl font-semibold rounded-xl outline-none'>Submit</button>

            </form>

        </section>
    )
}

export default Form
