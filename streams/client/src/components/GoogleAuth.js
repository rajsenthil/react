import React from 'react'

import { connect } from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '441177102780-34ju5mgu3eh0gt7ium5v21dedmr4b7bl.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();                
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();        
    }
    
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui blue google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render() {        
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { 
            isSignedIn: state.auth.isSignedIn,
            userId: state.payload
            };
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);