import {
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    GET_POSTS_PENDING,
  } from "./actions/actions";

const initialState = {

    posts: null
}

const rootReducer = (state=initialState, action) => {

    switch (action.type) {

        case GET_POSTS_PENDING:
                return {
                    ...state,
                    pending: true
                }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
                return state;
    }
}


export default rootReducer


export const getPosts = state => state.posts;
export const getPostsPending = state => state.pending;
export const getPostsError = state => state.error

