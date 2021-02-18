export const getPosts = state => state.posts.posts;
export const countPosts = state => getPosts(state).length;
