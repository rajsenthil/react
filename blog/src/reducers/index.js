import { combineReducers } from 'redux'
import { fetchPosts } from '../actions'

const postReducer = () => {
    return fetchPosts;
}

const postSelector = (action) => {
    if (action.type === 'POST_SELECTED') {
        return action.payload;
    }
    return action;
}

export default combineReducers({
    postAction: postReducer
});