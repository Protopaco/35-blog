import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from '../../state/DogProvider';

const BlogForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();


    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createPost({ title, body }));
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

export default BlogForm;
