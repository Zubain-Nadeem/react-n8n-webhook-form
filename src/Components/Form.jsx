import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({});

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: name === "age" ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            "https://zubaind5.app.n8n.cloud/webhook/User-Form",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            },
        );

        const result = await response.json();
        if (result.status === "success") {
            alert(result.message);
        } else {
            alert(result.message);
        }
    };
    return (
        <section className="flex flex-col gap-10 items-center justify-center w-full h-screen bg-linear-to-tr from-[#003049] to [#fdf0d5]">
            <h1 className="text-3xl underline font-bold text-[#780000] ">Company Registration Form</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-10 shadow-2xl rounded-2xl shadow-[#669bbc] bg-[#003049] "
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Company name"
                    onChange={handleOnChange}
                    className="border  border-white px-2 py-4 rounded-lg w-sm outline-none placeholder:text-gray-400 text-white"
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Employs (e.g : 11 to 20)"
                    onChange={handleOnChange}
                    className="border  border-white px-2 py-4 rounded-lg w-sm outline-none placeholder:text-gray-400 text-white "
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Company email (e.g : abc@gmail.com)"
                    onChange={handleOnChange}
                    className="border border-white px-2 py-4 rounded-lg w-sm outline-none placeholder:text-gray-400 text-white"
                />
                <select name="company-registration" className="border border-white pl-2 pr-4 py-4 rounded-lg w-sm outline-none bg-[#003049] text-white"
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (e.g : xxx-xxx-xxx)"
                    onChange={handleOnChange}
                    className="border border-white px-2 py-4 rounded-lg w-sm outline-none placeholder:text-gray-400 text-white"
                />
                <button className=" hover:bg-blue-300 transition-all duration-300 ease-in-out cursor-pointer  px-4 py-3 bg-blue-600 text-white text-xl font-semibold rounded-xl outline-none">
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Form;
