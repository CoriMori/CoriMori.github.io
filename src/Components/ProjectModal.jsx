import React, { Children, useState } from 'react'
import { MdClose } from "react-icons/md";
import Carousel from './Carousel';
import ProjectDataLayout from './ProjectDataLayout';
import { VideoPlayer } from './VideoPlayer';

const ProjectModal = ({ projectData, isVisible, onClose }) => {
    if (!isVisible) return null;
    const [showVideo, setVideoVisible] = useState(false);

    const HandleClose = (e) => {
        if (e.target.id == 'modal-wrapper') onClose();
    }

    return (
        <div className='modal'>
            <div className='modal-card' id='modal-wrapper' onClick={HandleClose}>
                <div className='size-control'>
                    {!showVideo ? <Carousel images={projectData.images} /> : <VideoPlayer link={projectData.video} />}
                    <div className='modal-body flex flex-col h-[400px] overflow-y-auto'>
                        <button className='text-2xl cursor-pointer place-self-end hover:text-gray-500' onClick={() => onClose()}><MdClose /></button>
                        <ProjectDataLayout projectData={projectData} videoClickEvent={setVideoVisible} currentValue={showVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal