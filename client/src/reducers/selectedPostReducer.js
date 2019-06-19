export default (selectedPost = null, action) => {
    switch(action.type) {
        case 'SELECTED_POST':
            return action.payload;
        default:
            return selectedPost;
    }
}