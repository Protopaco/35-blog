import React, { useState } from 'react';
import { createComment, updateCommentId } from '../../actions/commentActions';
import { getCommentId } from '../../selectors/commentSelectors';
import { useDispatch, useSelector } from 'react-redux';


const CommentForm = ({ postId }) => {
    const dispatch = useDispatch();
    const commentId = useSelector(getCommentId);

    const [text, setText] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(createComment({ text, postId, commentId }));
        dispatch(updateCommentId(commentId));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Comment"
                value={text}
                onChange={({ target }) => setText(target.value)}
            />
            <button>Create Comment</button>
        </form>
    );
};

export default CommentForm;
