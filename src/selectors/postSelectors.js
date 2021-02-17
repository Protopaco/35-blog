export const getPosts = state => state.posts;
export const countPosts = state => getPosts(state).length;
