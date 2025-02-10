import React, { useState } from 'react'
import ProjectModal from './ProjectModal'
import Carousel from './Carousel';


const ProjectCard = ({ projectData }) => {
    const [showModal, setModalVisibility] = useState(false);

    return (
        <div>
            <ProjectModal projectData={projectData} isVisible={showModal} onClose={() => { setModalVisibility(false) }} />
            <div className="max-w-sm bg-white rounded-lg flex flex-col card-shadow">
                <Carousel images={projectData.images} />
                <div className="project-card p-5">
                    <h5>{projectData.projectName}</h5>
                    <h6>{projectData.summary}</h6>
                    <p><b>Engine -</b> {projectData.engine}<br />
                        <b>Programming Language -</b> {projectData.language}<br />
                        <b>Role -</b> {projectData.role}
                    </p>
                    <button className='card-btn' onClick={() => { setModalVisibility(true); }}>
                        <span>Read More</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard