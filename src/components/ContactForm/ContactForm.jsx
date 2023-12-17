import { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const validateForm = () => {
        let isValid = true
        const newFormErrors = { ...formErrors }

        if (formData.name.trim() === '') {
            newFormErrors.name = 'Name is required'
            isValid = false
        } else {
            newFormErrors.name = ''
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            newFormErrors.email = 'Invalid email address'
            isValid = false
        } else {
            newFormErrors.email = ''
        }

        // Validate message
        if (formData.message.trim() === '') {
            newFormErrors.message = 'Message is required'
            isValid = false
        } else {
            newFormErrors.message = ''
        }

        setFormErrors(newFormErrors)
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            console.log('Form submitted:', formData)
        } else {
            console.log('Form validation failed')
        }
    }

    return (
        <div className="ContactForm grid grid-cols-6">

            <form className='col-start-2 col-span-4'>
                <div className="mb-8 grid md:grid-cols-2 gap-10">
                    < div >
                        <label htmlFor="name">Name</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    </div >
                    <div>
                        <label htmlFor="name">Email</label>

                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    </div>
                </div >
                <div className="mb-6">
                    <label htmlFor="name">Leva me a message</label>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                </div>

                <div className="flex items-center justify-center">
                    <button
                        className=" button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        type="submit" onClick={handleSubmit}
                    >
                        Send!
                    </button>
                </div>
            </form >
        </div >
    )
}

export default ContactForm