import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
    const response = await jsonplaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response});
};

export const selectPost = (post) => {
  return {
    type: 'POST_SELECTED',
    payload: post
  }
}