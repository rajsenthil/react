import React from 'react'
import { connect } from 'react-redux'
import { deleteStream } from '../../actions'

class StreamDelete extends React.Component {
    
}

const mapStateToProps = (state, ownProbs) => {   
    return {stream: state.streams[ownProbs.match.params.id]}
}
export default connect(mapStateToProps, { deleteStream })(StreamDelete);