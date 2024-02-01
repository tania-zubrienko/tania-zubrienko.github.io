import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import projects from '../../data/projects.json'
import ProjectCard from "../../components/ProjectCard/ProjectCard"

const SingleProject = ()=>{
    
const {id} = useParams()
const [project, setProject] = useState()

useEffect(()=>getProject(),[])

function getProject(){
    setProject( projects.filter(e=>e.id==id)[0])
}



return(
    project&&
    <div className="SingleProject">
        <ProjectCard project={project}/>
    </div>
)

}

export default SingleProject