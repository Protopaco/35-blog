import React, { useState } from 'react';
import { createPost, updatePostId } from '../../actions/postActions';
import { getPostId } from '../../selectors/postSelectors';
import { useDispatch, useSelector } from 'react-redux';

const PostForm = () => {
    const dispatch = useDispatch();
    const postId = useSelector(getPostId);

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createPost({ title, body, postId }));
        dispatch(updatePostId(postId));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={({ target }) => setTitle(target.value)}
            />
            <input
                type="body"
                placeholder="Body"
                value={body}
                onChange={({ target }) => setBody(target.value)}
            />
            <button>Create Post</button>
        </form>
    );
};

export default PostForm;



