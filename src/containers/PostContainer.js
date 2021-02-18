import React from 'react';
import PostList from '../posts/PostList.jsx';
import PostForm from '../form/PostForm';

export default function PostContainer() {
    return <>
        <PostForm />
        <PostList />
    </>;
}
