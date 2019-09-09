import React from 'react'
import ProjectSummery from './ProjectSummery';

const ProjectList = ( {projects} ) => {
    console.log(projects)
    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <ProjectSummery project={project} key={project.id} />
                )
            })}
        </div>
    )
}
export default ProjectList;