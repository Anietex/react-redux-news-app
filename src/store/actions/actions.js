

export const GET_POSTS_PENDING = 'get-posts-pending';
export const GET_POSTS_SUCCESS = 'get-posts-success';
export const GET_POSTS_ERROR = 'get-posts-error';





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

