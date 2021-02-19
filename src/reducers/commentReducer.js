import { CREATE_COMMENT, DELETE_COMMENT, DELETE_ALL_COMMENTS, UPDATE_COMMENT_ID } from '../actions/commentActions';

const initialState = {
    comments: [],
    commentId: 1
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.commentId !== action.payload)
            };
        case DELETE_ALL_COMMENTS:
            return {
                ...state,
                comments: state.comments.filter(
                    comment => comment.postId !== action.payload
                )
            };
        case UPDATE_COMMENT_ID:
            return {
                ...state,
                comments: state.comments,
                commentId: state.commentId + 1,
            };
        default:
            return state;
    }
}
