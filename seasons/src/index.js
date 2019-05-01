import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  state = { lat: null, errorMessage: ''}

  componentDidMount(){
    console.log('My component renedered to the screen');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude}),
      (err) => this.setState({ errorMessage: err.message})
    );
  }

  componentDidUpdate(){
    console.log("Conpoenent got updated");
  }

  componentWillUnmount(){
    console.log("Component Unmounted");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    
    if (this.state.lat && !this.state.errorMessage) {
        return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request" />
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))