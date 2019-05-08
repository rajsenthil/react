import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {images: []};

  onSearchSubmit = async (term) => {
    // console.log("Apps"+ term);
    const response = await 
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 7f558adb729902a609fb6c7e1447a62a9ad9ade8b7c9e58b73a3c52769f33149'
      }
    });
    
    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;