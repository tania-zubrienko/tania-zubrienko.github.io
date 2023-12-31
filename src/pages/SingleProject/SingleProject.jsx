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
                <div className="max-w-screen-lg mx-auto">

                    <div id="carousel" className="carousel flex">
                        <button className="prev" value="prev" onClick={setImage}>prev</button>
                        <div className="carousel-inner">
                            <div id="slide" className="carousel" style={{ backgroundImage: `url("/src/assets/${project.snapshots[currentImg]}.png")` }}></div>
                        </div>
                        <button className="next" value="next" onClick={setImage}>btn</button>
                    </div>

                    <div className="description">
                        <h1>{project.name}</h1>
                        <br />
                        <p>{project.description}</p>
                        <hr />
                        {project.tecnologies.map((e, i) => <span key={i}>{e} - </span>)}
                        <br />
                        <Link to={project.github}>Link to repo</Link>
                        <br />
                        <Link to={project.url}>{project.url}</Link>
                    </div>

                </div>
            </div>
            :
            <h1>LOADING...</h1>
    )
}

export default SingleProject