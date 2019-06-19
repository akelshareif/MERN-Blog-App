import axios from "axios";

//Action Creators

export const selectPost = post => {
    return {
        type: 'SELECTED_POST',
        payload: post
    }
}

export const fetchPosts = () => async dispatch => {
    const response = await axios.get('/blogs');
    dispatch({
        type: 'FETCHED_POSTS',
        payload: response.data
    });
}