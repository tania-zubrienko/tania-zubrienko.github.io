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
        const { id } = e.target
        if (id === "next") {
            currentImg < project.snapshots.length - 1 ? setCurrentImg(currentImg + 1) : setCurrentImg(0)
        }
        if (id === "prev") {
            currentImg <= 0 ? setCurrentImg(project.snapshots.length - 1) : setCurrentImg(currentImg - 1)
        }

        const currentSlide = document.getElementById("slide")
        currentSlide.style.backgroundImage = project.snapshots[currentImg]
    }


    return (
        project ?
            <div className="ProjectPage">
                <div className="max-w-screen-lg mx-auto">

                    <div id="carousel" className="carousel flex">
                        <button className="prev" value="prev" onClick={setImage}><div className="prev" id="prev"/></button>
                        <div className="carousel-inner">
                            <div id="slide" className="carousel" style={{ backgroundImage: `url("${project.snapshots[currentImg]}")` }}></div>
                        </div>
                        <button className="next" value="next" onClick={setImage}><div className="next" id="next"></div></button>
                    </div>

                    <div className="description">
                        <h1 >{project.name}</h1>
                        <p>{project.description}</p>
                        {project.tecnologies.map((e, i) => <span key={i}>{e} - </span>)}
                        <section className="links">
                            <Link to={project.github} className="hover:text-cyan-500 hover:underline hover:underline-offset-4">Link to repo</Link>
                            <Link to={project.url} className="hover:text-cyan-500 hover:underline hover:underline-offset-4" >{project.url}</Link>
                        </section>
                    </div>

                </div>
            </div>
            :
            <h1>LOADING...</h1>
    )
}

export default SingleProject