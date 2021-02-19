import { countPosts, getPosts } from './postSelectors';

const newPost = {
    title: 'hello',
    body: 'world',
    postId: 5
};

describe('post selectors', () => {
    it('select the list of posts from state', () => {
        const state = {
            posts: {
                posts: [newPost]
            }
        };

        const posts = getPosts(state);

        expect(posts).toEqual([newPost]);
    });

    it('select the number of posts', () => {
        const state = {
            posts: {
                posts: [newPost]
            }
        };

        expect(countPosts(state)).toEqual(1);
    });
});
