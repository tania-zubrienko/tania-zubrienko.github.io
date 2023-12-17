import ProjectCard from '../../components/ProjectCard/ProjectCard'
import './ProjectsPage.css'


const ProjectsPage = () => {
    return (
        <div className="ProjectsPage">
            <div className="grid gap-10 grid-cols-1">
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectsPage