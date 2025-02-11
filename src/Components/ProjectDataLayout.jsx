import React, { useState } from 'react'

const ProjectDataLayout = ({ projectData, videoClickEvent, currentValue }) => {
    const [btnText, setButtonText] = useState("View Video");

    const HandleClick = () => {
        if (btnText == "View Video") {
            setButtonText("View Images");
        } else {
            setButtonText("View Video");
        }
        videoClickEvent(!currentValue);
    }

    return (
        <>
            <h3>{projectData.projectName}</h3>
            <p><b>Status -</b> {projectData.status}<br />
                <b>Type -</b> {projectData.projectType}<br />
                {projectData.modalBody}
            </p>
            <div>
                {projectData.video && (
                    <button className='modal-btn' onClick={() => { HandleClick(); }}>{btnText}</button>
                )}
            </div>
        </>
    )
}


export default ProjectDataLayout