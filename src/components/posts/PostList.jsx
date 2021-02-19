import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/postSelectors';
import Post from './Post';
import { Link } from 'react-router-dom';

const PostList = () => {
    const posts = useSelector(getPosts);

    const postElements = posts.map((post, index) => (
        <li key={index} >
            <Link to={`/post/${post.postId}`}>
                <Post {...post} />
            </Link>
        </li >
    ));

    return (
        <ul>
            {postElements}
        </ul>
    );
};

export default PostList;
