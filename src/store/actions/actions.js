export const GET_POSTS = 'get-posts';
export const GET_POST = 'get-post';

export const GET_POSTS_PENDING = 'get-posts-pending';
export const GET_POSTS_SUCCESS = 'get-posts-success';
export const GET_POSTS_ERROR = 'get-posts-error';

export const GET_POST_PENDING = 'get-post-pending';
export const GET_POST_SUCCESS = 'get-post-success';
export const GET_POST_ERROR = 'get-post-error';



export function getPostsPending(){
    return {
        type: GET_POSTS_PENDING
    }
}

export function getPostsSuccess(posts) {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}


export function getPostsError(error) {
    return {
        type: GET_POSTS_ERROR,
        error
    }
}

export function getPostPending(){
    return {
        type: GET_POST_PENDING
    }
}

export function getPostSuccess(post) {
    return {
        type: GET_POST_SUCCESS,
        post: post
    }
}


export function getPostError(error) {
    return {
        type: GET_POST_ERROR,
        error: error
    }
}
