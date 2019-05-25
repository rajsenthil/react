import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../actions'
import Modal from '../Modal'
import history from '../../history'

class StreamDelete extends React.Component {

    componentDidMount() {        
        this.props.fetchStream(this.props.match.params.id)
    }
    
    onDelete = () => {
        this.props.deleteStream(this.props.stream.id);
        history.push('/');
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button 
                    onClick={() => this.props.deleteStream(id)} 
                    className="ui button negative">
                        Detele
                </button>
                <Link className="ui button secondary" to="/">Cancel</Link>            
            </React.Fragment>
        )
    }
    
    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete stream title: ${this.props.stream.description}?`;
    }
    render() {                
        return (
            <Modal 
                title="Delete Stream"
                onDismiss={() => history.push('/')}
                content={this.renderContent()}
                actions={this.renderActions()}
            />
        );
    }
}

const mapStateToProps = (state, ownProbs) => {   
    return {stream: state.streams[ownProbs.match.params.id]}
}
export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);