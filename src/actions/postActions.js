
export const CREATE_POST = 'CREATE_POST';
export const createPost = post => ({
    type: CREATE_POST,
    payload: post
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = id => ({
    type: DELETE_POST,
    payload: id
});

export const UPDATE_POST_ID = 'UPDATE_POST_ID';
export const updatePostId = postId => ({
    type: UPDATE_POST_ID,
    payload: postId
});
