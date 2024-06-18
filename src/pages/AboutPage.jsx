import profile from '../assets/profile.jpg'
import { IoLogoNodejs, IoLogoJavascript, IoLogoHtml5, IoLogoAngular, IoLogoVue  } from "react-icons/io5";
import { FaReact, FaJava, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiMongodb } from "react-icons/si";
import './AboutPage.css'
const AboutPage = () => {

    return (
        <div className="AboutPage">
            <div className="description grid grid-cols-1 text-center md:grid-cols-3 md:text-left">
                <img className='profilePic md:col-span-1' src={profile} alt="profile picture" />
                <div className="journey md:col-span-2">
                    <h1>The Journey</h1>
                    <p>My professional journey began in product and project management,
                        leveraging a background in marketing and extensive experience in sales.
                        Despite my success in these areas, my true passion lies in technology.</p>
                    <p>After two years of leading teams and launching projects,
                        I decided to deepen my understanding and embarked on formal studies in software development.
                        Today, I work as a full-stack developer with a primary focus on backend development.
                        My expertise spans technologies such as JavaScript, Node.js, Express.js, relational and non-relational databases,
                        with React on the client side.</p>
                    <p>Beyond my professional pursuits, I am an active and dynamic person who is absoluty in love with motorcycles and hiking!</p>
                </div>
            </div>
            <h1 className='text-center text-5xl'>Expert In</h1>
            <div className="expertise grid grid-cols-1 md:grid-cols-2">

                <div className="technology">
                    <h1><FaJava size={60} /></h1>
                    <div className="text">
                        <h2>Java</h2>
                        <p>Development of robust server-side applications</p>
                    </div>
                </div>
                <div className="technology">
                    <h1><IoLogoJavascript size={60} /></h1>
                    <div className="text">
                        <h2>Javascript</h2>
                        <p>Implementation dynamic and interactive user interfaces, API integrations</p>
                    </div>
                </div>

                <div className="technology">
                    <h1><IoLogoNodejs size={60} /></h1>
                    <div className="text">
                        <h2>NodeJs</h2>
                        <p>Creating high-performance and scalable backend systems for web applications</p>
                    </div>
                </div>
                <div className="technology">
                    <h1><SiTypescript size={50} /></h1>
                    <div className="text">
                        <h2>TypeScript</h2>
                        <p>Implementation type-safe and maintainable code</p>
                    </div>
                </div>
                <div className="technology">
                    <h1> <SiMongodb size={60} /></h1>
                    <div className="text">
                        <h2>MongoDB</h2>
                        <p>Development and management of flexible and scalable databases for data-driven applications</p>
                    </div>
                </div>
                <div className="technology">
                    <h1> <FaDatabase size={60} /></h1>
                    <div className="text">
                        <h2>SQL</h2>
                        <p>Working with relational database queries</p>
                    </div>
                </div>
                <div className="technology">
                    <h1><FaReact size={60} /></h1>
                    <div className="text">
                        <h2>ReactJs</h2>
                        <p>Engineering of dynamic and feature-rich user interfaces</p>
                    </div>
                </div>
                <div className="technology">
                    <h1><IoLogoAngular  size={60} /></h1>
                    <div className="text">
                        <h2>AngularJs</h2>
                        <p>Developing robust and maintainable single-page applications with a comprehensive framework for client-side MVW architecture</p>
                    </div>
                </div>
                <div className="technology">
                    <h1><IoLogoVue  size={60} /></h1>
                    <div className="text">
                        <h2>VueJs</h2>
                        <p>Building progressive and high-performance user interfaces with a focus on simplicity and flexibility</p>
                    </div>
                </div>
                <div className="technology">
                    <h1><IoLogoHtml5 size={60} /></h1>
                    <div className="text">
                        <h2>HTML/CSS</h2>
                        <p>Craft visually appealing and responsive web pages</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage