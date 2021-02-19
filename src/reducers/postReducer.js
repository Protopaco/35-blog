import { CREATE_POST, DELETE_POST, UPDATE_POST_ID } from '../actions/postActions';

const initialState = {
    posts: [],
    postId: 1
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.postId !== action.payload)
            };
        case UPDATE_POST_ID:
            return {
                ...state,
                posts: state.posts,
                postId: state.postId + 1
            };
        default:
            return state;
    }
}
