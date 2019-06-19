import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import selectedPostReducer from './selectedPostReducer';
import postsReducer from './postsReducer';


export default combineReducers({
    selectedPost: selectedPostReducer,
    posts: postsReducer,
    form: formReducer
});