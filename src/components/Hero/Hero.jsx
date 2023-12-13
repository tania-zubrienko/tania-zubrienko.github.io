import './Hero.css'
import { Player } from '@lottiefiles/react-lottie-player';
const Hero = () => {

    return (
        <div className='Hero'>
            <div className="mt-20 text-center md:text-left" >
                <h1 className='text-4xl md:text-6xl'> &lt; Hello, World!/&gt; </h1>
                <div className="text-2xl md:text-3xl textBlock">
                    <h2>I am Tania</h2>
                    <h1>Full Stack Developer</h1>
                </div>
            </div >
            <div className="animation invisible md:visible">
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