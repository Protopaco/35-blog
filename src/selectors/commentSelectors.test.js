import { getComments, getCommentId } from './commentSelectors';

const newComment = {
    text: 'yo!',
    commentId: 1,
    postId: 5
};

describe('testing comment selectores', () => {
    it('select the list of comments from state', () => {
        const state = {
            comments: {
                comments: [newComment]
            }
        };

        const comments = getComments(state);

        expect(comments).toStrictEqual([newComment]);
    });

    it('retrieve the id of the first comment', () => {
        const state = {
            comments: {
                comments: [newComment]
            }
        };

        const commentId = getCommentId(state);

        expect(commentId).toEqual(newComment.id);
    });
});
