import { CREATE_COMMENT, DELETE_COMMENT, DELETE_ALL_COMMENTS } from '../actions/commentActions';

const initialState = {
    comments: []
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
                comments: state.comments.filter(comment =>
                    comment.id !== action.payload)
            };
        case DELETE_ALL_COMMENTS:
            return {
                ...state,
                comments: state.comments.filter(
                    comment => comment.postId !== action.payload)
            };
    }
}
