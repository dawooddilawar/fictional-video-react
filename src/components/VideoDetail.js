import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    return(
        <div className="ui segment">
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
            </div>
            <h4 className="ui header">{video.snippet.title}</h4>
            <p className="">{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;