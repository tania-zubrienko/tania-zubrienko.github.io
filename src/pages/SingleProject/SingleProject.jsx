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
                <div className="max-w-screen-xl mx-auto">

                    <div id="carousel" className="carousel flex">
                        <button className="prev" value="prev" onClick={setImage}><div className="prev" id="prev" /></button>
                        <div className="carousel-inner">
                            <img id="slide" src={project.snapshots[currentImg]} />
                        </div>
                        <button className="next" value="next" onClick={setImage}><div className="next" id="next"></div></button>
                    </div>

                    <div className="description text-center md:text-left">
                        <h1>{project.name}</h1>
                        <section className="links flex">
                            {project.github.map((e, i) => {
                                return (
                                    < Link to={e} key={i} className="hover:text-cyan-500 hover:underline hover:underline-offset-4 repoLink" >
                                        ✦   Link to repo <span>{project.github.length > 1 && `${i + 1}`}</span>
                                    </Link>)
                            })}
                        </section>
                        <p>{project.description}</p>
                        <div className="text-center">
                            {project.tecnologies.map((e, i) => <span key={i}>{e} {i != project.tecnologies.length - 1 && "-"} </span>)}
                        </div>
                        <section className="links">
                            {project.url != "Not deployed yet"
                                &&
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