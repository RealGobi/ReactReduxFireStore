import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p> Lorem ipsum dolar sit amet consectetur adipisicing elit. Lorem ipsum dolar sit amet consectetur adipisicing elit. Lorem ipsum dolar sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: Jimmy</div>
                    <div>2nd September, 4pm</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails;
