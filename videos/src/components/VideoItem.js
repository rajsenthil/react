import React from 'react'

import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div>
            <div className="video-item item" onClick={() => onVideoSelect(video)}>
                <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <a className="header">{video.snippet.title}</a>
                </div>
            </div>
            <hr style={{color:`#DCDCDC`, padding: `0`}}/>
        </div>             
    )
}
export default VideoItem;