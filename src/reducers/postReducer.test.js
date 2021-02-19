import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

const newPost = {
    title: 'hello',
    body: 'world',
    PostId: 5
};

describe('post reducer tests', () => {
    it('add a post with CREATE_POST action', () => {
        const state = {
            posts: []
        };

        const action = createPost(newPost);
        const newState = reducer(state, action);

        expect(newState).toEqual({
            posts: [newPost]
        });
    });

    it('delete a post with DELETE_POST action', () => {
        const state = {
            posts: [newPost]
        };

        const action = deletePost(newPost.postId);

        expect(reducer(state, action)).toEqual({ posts: [] });
    });

});


