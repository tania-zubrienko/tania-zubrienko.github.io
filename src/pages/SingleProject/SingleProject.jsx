import { useParams } from "react-router-dom"
import data from '../../data/projects.json'
import { useEffect, useState } from "react"

import './SingleProject.css'
const SingleProject = () => {
    const { id } = useParams()

    const [project, setProject] = useState()
    const [currentImg, setCurrentImg] = useState(0)
    useEffect(() => setProject(data.find(elm => elm.id == id)), [])


    function setImage(e) {
        const { value } = e.target

        if (value === "next") {
            currentImg < project.snapshots.length - 1 ? setCurrentImg(currentImg + 1) : setCurrentImg(0)
        }
        if (value === "prev") {
            currentImg <= 0 ? setCurrentImg(project.snapshots.length - 1) : setCurrentImg(currentImg - 1)
        }
    }


    return (
        project ?
            <div className="ProjectPage">
                <div className="max-w-screen-lg mx-auto">
                    <div id="carousel" className="carousel flex">
                        <button className="prev" value="prev" onClick={setImage}>prev</button>
                        <div className="carousel-inner">

                            <div id="slide" className="carousel">
                                <img src={`/src/assets/${project.image}.png`} alt="Imagen 1" />
                            </div>

                        </div>

                        <button className="next" value="next" onClick={setImage}>btn</button>
                    </div>
                </div>
            </div>
            :
            <h1>LOADING...</h1>
    )
}

export default SingleProject