//Action Creators

export const selectPost = post => {
    return {
        type: 'SELECTED_POST',
        payload: post
    }
}