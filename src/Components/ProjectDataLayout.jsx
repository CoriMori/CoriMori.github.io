import React from 'react'

const ProjectDataLayout = ({ projectData }) => {
    return (
        <>
            <h3>{projectData.projectName}</h3>
            <p><b>Status -</b> {projectData.status}<br />
                <b>Type -</b> {projectData.projectType}<br />
                {projectData.modalBody}

            </p>

            {projectData.video && (
                <iframe
                    width={100}
                    height={315}
                    src={projectData.video}
                    title={projectData.projectName}
                    allow='accelerometer; autoplay; clipboard-write;
                    encrypted-media; gyroscope; picture-in-picture;'
                    allowFullScreen
                >
                </iframe>
            )}
        </>
    )
}

export default ProjectDataLayout