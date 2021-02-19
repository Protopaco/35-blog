export const getPosts = state => state.posts.posts;
export const getPostId = state => state.posts.postId;
export const countPosts = state => getPosts(state).length;
