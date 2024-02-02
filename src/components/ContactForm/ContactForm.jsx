import { useEffect, useRef, useState } from 'react'
import './ContactForm.css'
import PopUp from '../PopUp/PopUp'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [state, setState] = useState(false)
    useEffect(() => { }, [state])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const validateForm = () => {

        let isValid = true
        const newFormErrors = { ...formErrors }

        if (formData.user_name.trim() === '') {
            newFormErrors.name = 'Name is required'
            isValid = false
        } else {
            newFormErrors.name = ''
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.user_email)) {
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

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        validateForm() && emailjs
            .sendForm(
                import.meta.env.VITE_APP_SERVICE_ID,
                import.meta.env.VITE_APP_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_APP_PUBLIC_KEY,
            )
            .then(() => {
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
                setState(true)
                form.current.reset()
            })
            .catch(err => console.log(err))

    }
    return (
        <div className='ContactForm grid grid-cols-6'>

            <form ref={form} onSubmit={sendEmail} className={`col-start-2 col-span-4 ${state && 'blur-md'}`} id="contactForm">
                <div className="md:flex justify-around">
                    <div className='md:w-1/2 md:mr-5'>
                        <label>Name</label>
                        <input type="text" name="user_name" className="mt-3 mb-2 w-full p-2 border border-gray-300 rounded"
                            onChange={handleChange} />
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    </div>
                    <div className='md:w-1/2'>
                        <label>Email</label>
                        <input type="text" name="user_email" className="mt-3 mb-2 w-full p-2 border border-gray-300 rounded"
                            onChange={handleChange} />
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                    </div>
                </div>
                <label>Message</label>
                <textarea name="message" className="mt-3 mb-2 w-full p-2 border border-gray-300 rounded"
                    onChange={handleChange} />
                <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                <div className='flex justify-center'>
                    <input type="submit" value="Send" className=" button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" />
                </div>
            </form>

            {state && <PopUp close={setState} />}

        </div >
    )
}

export default ContactForm