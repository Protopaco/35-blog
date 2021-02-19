import { createComment, deleteComment, deleteAllComments, updateCommentId } from '../actions/commentActions';
import reducer from './commentReducer';

const newComment = {
    text: 'hi!',
    commentId: 1,
    postId: 5
};

const newComment2 = {
    text: 'yo!',
    commentId: 2,
    postId: 5
};

describe('comment reducer tests', () => {
    it('add a comment with CREATE_COMMENT action', () => {
        const state = {
            comments: []
        };

        const action = createComment(newComment);
        const newState = reducer(state, action);

        expect(newState).toEqual({
            comments: [newComment]
        });
    });

    it('delete a comment with DELETE_COMMENT action', () => {
        const state = {
            comments: [newComment]
        };

        const action = deleteComment(newComment.commentId);

        expect(reducer(state, action)).toEqual({ comments: [] });
    });

    it('delete all comments on one post DELETE_ALL_COMMENTS', () => {
        const state = {
            comments: [newComment, newComment2]
        };

        const action = deleteAllComments(newComment.postId);

        expect(reducer(state, action)).toEqual({ comments: [] });
    });

    it('increments the comment id', () => {
        const state = {
            comments: [],
            commentId: 5
        };

        const action = updateCommentId(state);

        expect(reducer(state, action)).toEqual({ comments: [], commentId: 6 });
    });

});
