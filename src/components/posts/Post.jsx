import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';

const Post = ({ title, body, id }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deletePost(id));
    };

    return (
        <>
            <dl>
                <dt>{title}</dt>
                <dd>{body}</dd>
            </dl>
            <button onClick={handleClick}>Delete</button>
            <hr />
        </>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Post;
