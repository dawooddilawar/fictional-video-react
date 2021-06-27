import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [videos, search] = useVideos('What is life?')

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])
    

    const onVideoSelect = ( video ) => {
        setSelectedVideo(video);
    }

    return(
        <div className="ui container">
            <SearchBar onTermSubmit={search} />
            <div className="ui grid">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                    <ImageList videos={videos} onVideoSelect={onVideoSelect}/>
                </div>
            </div>
            
        </div>
    );

}

export default App;