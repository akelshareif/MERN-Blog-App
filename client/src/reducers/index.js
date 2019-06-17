import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const selectedPostReducer = (selectedPost = null, action) => {
    switch(action.type) {
        case 'SELECTED_POST':
            return action.payload;
        default:
            return selectedPost;
    }
}

export default combineReducers({
    selectedPost: selectedPostReducer,
    form: formReducer
});