export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = comment => ({
    type: CREATE_COMMENT,
    payload: comment
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = id => ({
    type: DELETE_COMMENT,
    payload: id
});

export const DELETE_ALL_COMMENTS = 'DELETE_ALL_COMMENTS';
export const deleteAllComments = postId => ({
    type: DELETE_ALL_COMMENTS,
    paylod: postId
});

export const UPDATE_COMMENT_ID = 'UPDATE_COMMENT_ID';
export const updateCommentId = commentId => ({
    type: UPDATE_COMMENT_ID,
    payload: commentId
});
