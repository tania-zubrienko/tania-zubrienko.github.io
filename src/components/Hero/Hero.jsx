import { Link } from 'react-router-dom';
import './Hero.css'
import { Player } from '@lottiefiles/react-lottie-player';
const Hero = () => {

    return (
        <div className='Hero'>
            <div className="mt-20 text-center md:text-left" >
                <h1 className='text-4xl md:text-6xl'> &lt; Hello, World!/&gt; </h1>
                <section className="text-2xl md:text-3xl textBlock mb-5">
                    <h2>I am Tania</h2>
                    <h1>Full Stack Developer</h1>
                </section>
                <section className='buttons mt-10 flex flex-col lg:flex-row items-center lg:grid lg:grid-cols-2'>
                    <Link to={'/about'}>
                        <button type="button"
                            className="min-h-36 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            My CV
                        </button>
                    </Link>
                    <Link to={'/contact'}>
                        <button type="button"
                            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                            Do you have a project?
                        </button>
                    </Link>
                </section>
            </div >
            <div className="animation hidden md:block">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/16475394-8693-4469-b11b-193e180a1c6c/qQ0hNpC7x2.json"
                    style={{ height: "50vh", width: '25vw', }}
                >
                </Player>
            </div>
        </div>
    )
}
export default Hero