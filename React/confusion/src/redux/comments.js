// import { COMMENTS } from '../shared/comments'
import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
    errMess: null,
    comments: []
}, actions) => {
    switch (actions.type) {

        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null, comments: actions.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: actions.payload, comments: [] };

        case ActionTypes.ADD_COMMENT:
            var comment = actions.payload;
            // comment.id = state.comments.length;
            // comment.date = new Date().toISOString();
            return {...state,comments:state.comments.concat(comment)};
        default:
            return state;
    }
}