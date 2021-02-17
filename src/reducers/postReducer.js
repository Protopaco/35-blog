import { CREATE_POST, DELETE_POST } from '../actions/postActions';

export const initialState = {
    posts: []
};

export default function reducer(state, action) {
    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        default:
            return state;
    }
}
