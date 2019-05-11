import React from 'react'

const VideoDetail = ({video}) => {

    const videoSrc = video? `https://www.youtube.com/embed/${video.id.videoId}` : '';

    return (
        <div>
            <div className="ui embed">
            <iframe width="560" height="315" 
                src={videoSrc} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video? video.snippet.title: ''}</h4>                
                <p>{video? video.snippet.description: ''}</p>
            </div>
        </div>
    )
}

export default VideoDetail;