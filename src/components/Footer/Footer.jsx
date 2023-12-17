import { Link } from 'react-router-dom';
import './Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { useEffect } from 'react';


const Footer = () => {

    const openMail = () => window.location.href = 'mailto:tucorreo@ejemplo.com'

    useEffect(() => { }, [open])

    return (
        <div className="Footer flex items-center justify-center">
            <Link to={'https://github.com/tania-zubrienko'}><FaGithub size={50} /></Link>
            <Link to={'https://www.linkedin.com/in/tania-zubrienko/'}><FaLinkedin size={50} /></Link>
            <h1 onClick={() => openMail()}><TbMailFilled size={50} /></h1>
        </div>
    )
}

export default Footer