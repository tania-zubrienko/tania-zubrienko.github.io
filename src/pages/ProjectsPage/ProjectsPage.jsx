import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './ProjectsPage.css'
import projects from '../../data/projects.json'


const ProjectsPage = () => {
    return (
        <div className="ProjectsPage">
            <div className="grid gap-20 grid-cols-1">
                {projects.map(e => <ProjectCard project={e} key={e.id} />)}
            </div>
        </div>
    )
}

export default ProjectsPage