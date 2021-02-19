import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';

const Comment = ({ text, commentId }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteComment(commentId));
    };

    return (
        <>
            <p>{text}</p>
            <button onClick={handleClick}>Delete</button>
            <hr />
        </>
    );
};

export default Comment;
