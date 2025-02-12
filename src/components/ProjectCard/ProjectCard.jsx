import { Link } from 'react-router-dom'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    const { name, description, image, tecnologies, url, github, id } = project
   tecnologies.map((e, i) =>  console.log(e) )
    return (
        <div className="ProjectCard grid md:gap-20 w md:grid-cols-2 items-center">
            < div className={`layout text-center ${id % 2 === 0 && 'md:order-last'}`} >
                <img className='object-cover h-50 w-50 rounded-lg' src={image} alt={name} />
            </div>
            <div className="description line-clamp-8 text-center md:text-left">
                <Link to={`/projects/${id}`}><h1 className='mb-5'>{name}</h1></Link>
                <p className="line-clamp-4 mb-5">{description}</p>
                <section className='tecnologies'>Tecnologies used: <br />{tecnologies.map((e, i) => <span key={i}> ✦ {e} </span>)}</section>
                <Link to={`/projects/${id}`}>
                    <button type="button"
                            className=" moreBtn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-full">
                            More...
                    </button>
                </Link>
            </div>
        </div >
    )
}

export default ProjectCard