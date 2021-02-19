import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import { deleteAllComments } from '../../actions/commentActions';
import { useHistory } from 'react-router-dom';

const Post = ({ title, body, postId }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch(deletePost(postId));
        dispatch(deleteAllComments(postId));
        history.push('/');
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
    postId: PropTypes.number.isRequired
};

export default Post;
