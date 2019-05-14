import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        console.log("test " + this.props.posts)
        return <div className="item">Post list</div>;
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect( mapStateToProps, {fetchPosts})(PostList);