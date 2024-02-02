import { Link, useParams } from "react-router-dom"
import data from '../../data/projects.json'
import { useEffect, useState } from "react"
import './SingleProject.css'

const SingleProject = () => {
    const { id } = useParams()

    const [project, setProject] = useState()
    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {

        setProject(data.find(elm => elm.id == id))
    }, [])
    useEffect(() => { }, [currentImg])

    function setImage(e) {
        const { value } = e.target

        if (value === "next") {
            currentImg < project.snapshots.length - 1 ? setCurrentImg(currentImg + 1) : setCurrentImg(0)
        }
        if (value === "prev") {
            currentImg <= 0 ? setCurrentImg(project.snapshots.length - 1) : setCurrentImg(currentImg - 1)
        }

        const currentSlide = document.getElementById("slide")
        currentSlide.style.backgroundImage = `url("/src/assets/${project.snapshots[currentImg]}.png")`
    }


    return (
        project ?
            <div className="ProjectPage">
                <div className="max-w-screen-xl mx-auto">

                    <div id="carousel" className="carousel flex">
                        <button className="prev text-transparent" value="prev" onClick={setImage}>prev</button>
                        <div className="carousel-inner">
                            <div id="slide" className="carousel" style={{ backgroundImage: `url("/src/assets/${project.snapshots[currentImg]}.png")` }}></div>
                        </div>
                        <button className="next text-transparent" value="next" onClick={setImage}>next</button>
                    </div>

                    <div className="description text-center md:text-left">
                        <h1 >{project.name}</h1>
                        <p>{project.description}</p>
                        {project.tecnologies.map((e, i) => <span key={i}>{e} - </span>)}
                        <section className="links">
                            {project.github.map((e, i) => {
                                return (
                                    < Link to={e} key={i} className="hover:text-cyan-500 hover:underline hover:underline-offset-4" >
                                        Link to repo
                                    </Link>)
                            })}
                            {project.url == "Not deployed yet"
                                ? <p>Not deployed yet</p>
                                :
                                <Link to={project.url == "Not deployed yet" ? `/projects/${project.id}` : project.url}
                                    className="hover:text-cyan-500 hover:underline hover:underline-offset-4" >
                                    {project.url}
                                </Link>
                            }
                        </section>
                    </div>

                </div>
            </div >
            :
            <h1>LOADING...</h1>
    )
}

export default SingleProject