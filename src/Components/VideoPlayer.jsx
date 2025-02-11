import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = ({ link }) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer className='video-player' url={link} width='100%' height='100%' controls={true} />
        </div>
    )
}
