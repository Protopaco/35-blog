import React from 'react';
import Post from '../components/posts/Post';
import CommentForm from '../components/comments/CommentForm';
import CommentList from '../components/comments/CommentList';
import { getPosts } from '../selectors/postSelectors';
import { useSelector } from 'react-redux';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function PostDetailsContainer(props) {
    const postId = Number(props.match.params.id);

    const allPosts = useSelector(getPosts);

    const displayPost = allPosts.filter(post => post.postId === postId);


    return <>
        <Post {...displayPost[0]} />
        <CommentForm postId={postId} />
        <CommentList postId={postId} />
    </>;
}

PostDetailsContainer.propTypes = {
    match: propTypes.object.isRequired
};
