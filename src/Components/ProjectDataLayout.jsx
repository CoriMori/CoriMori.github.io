import React, { useState } from 'react'

const ProjectDataLayout = ({ projectData, videoClickEvent, currentValue }) => {
    const [btnText, setButtonText] = useState("View Video");

    const HandleClick = (btnType) => {
        switch (btnType) {
            case "video":
                if (btnText == "View Video") {
                    setButtonText("View Images");
                } else {
                    setButtonText("View Video");
                }
                videoClickEvent(!currentValue);
                break;
            case "playable":
                GoToLink(projectData.projectLink);
                break;
            case "github":
                GoToLink(projectData.githubLink);
                break;
        }
    }

    const GoToLink = (link) => {
        window.open(link, '_blank');
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
                    <button className='modal-btn' onClick={() => { HandleClick("video"); }}>{btnText}</button>
                )}
                {projectData.projectLink && (
                    <button className='modal-btn' onClick={() => { HandleClick("playable"); }}>View Playable</button>
                )}
                {projectData.githubLink && (
                    <button className='modal-btn' onClick={() => { HandleClick("github"); }}>View Github</button>
                )}
            </div>
        </>
    )
}


export default ProjectDataLayout