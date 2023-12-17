import ProjectCard from '../ProjectCard/ProjectCard'
import './LastProjects.css'
import projects from '../../data/projects.json'

const LastProjects = () => {
    return (
        <div className="LastProjects grid gap-y-20 grid-cols-1 mt-50">
            <hr />
            <h1 className='text-center'>My latest works</h1>

            {projects.map(e => <ProjectCard projejct={e} key={e.id} />)}
        </div>
    )
}

export default LastProjects