import { Link } from 'react-router-dom';
import './Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import TechStack from '../TechStack/TechStack';


const Footer = () => {

    return (
        <div className="Footer">
            <div className="gap-x-10 flex items-center justify-center ">
                <Link to={'https://github.com/tania-zubrienko'} className='link'  target={"_blank"}> <FaGithub size={50} /></Link >
                <Link to={'https://www.linkedin.com/in/tania-zubrienko/'} className='link'  target={"_blank"}><FaLinkedin size={50} /></Link>
                <Link to={'/contact'}><TbMailFilled size={50} className='link' /></Link>
            </div >
            <TechStack />
        </div >
    )
}

export default Footer
