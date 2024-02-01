import { useState } from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'


const Navigation = () => {

    const [visible, setVisible] = useState(false)

    useState(() => { }, [visible])
    return (
        <div className="Navigation grid grid-cols-4 md:grid-cols-2 items-center" >
            <Link to={'/'} className=' homeLink hover:text-cyan-500'>Tania Zubrienko</Link>
            <section className="flex invisible md:visible justify-end">
                <Link to={'/about'}><h1 className='navlink hover:text-cyan-500 hover:animate-bounce '>About</h1></Link>
                <Link to={'/projects'}><h1 className=' navlink hover:text-cyan-500 hover:animate-bounce '>Projects</h1></Link>
                <Link to={'/contact'}><h1 className=' navlink hover:text-cyan-500 hover:animate-bounce '>Contact</h1></Link>
            </section>

            <section className="visible md:hidden burger ">
                <button onClick={() => setVisible(!visible)} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="hover:animate-bounce w-9 h-9 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <div className={visible ? "dropdown visible" : "dropdown hidden"}>
                        <Link to={'/about'}><h1 className='navlink hover:text-cyan-500'>About</h1></Link>
                        <Link to={'/projects'}><h1 className=' navlink hover:text-cyan-500'>Projects</h1></Link>
                        <Link to={'/contact'}><h1 className=' navlink hover:text-cyan-500'>Contact</h1></Link>
                    </div>
                </button>
            </section>

        </div>
    )
}

export default Navigation
