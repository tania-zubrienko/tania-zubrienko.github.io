import ProjectCard from '../ProjectCard/ProjectCard'
import './LastProjects.css'

const LastProjects = () => {
    return (
        <div className="LastProjects  grid gap-10 grid-cols-1 mt-50">
            <hr />
            <h1 className='text-center'>My latest work</h1>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}

export default LastProjects