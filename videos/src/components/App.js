import React from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VidoList from './VideoList'
import youtube from '../apis/youtube'
import { async } from 'q';
import { stat } from 'fs';

class App extends React.Component {
    state = { videos: [], selectedVideo: null};
    
    onSearchSubmit = async (text) => {                
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });
        this.setState({videos: response.data.items});
        this.setState({selectedVideo: response.data.items[0]});
        console.log(this.state.videos);
    }

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video})  
    };

    render() {
        return (
            <div> 
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <div className="ui container">
                    <div className="ui grid">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="four wide column">
                            <VidoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )              
    }
}

export default App;