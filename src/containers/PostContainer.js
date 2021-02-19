import React from 'react';
import PostList from '../components/posts/PostList';
import PostForm from '../components/form/PostForm';

export default function PostContainer() {
    return <>
        <PostForm />
        <PostList />
    </>;
}
