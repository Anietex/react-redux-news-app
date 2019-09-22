import {getPostsSuccess,getPostsError,getPostsPending} from "../actions/actions";
import config from "../../config";

export default function (page=1) {
    return dispatch => {
        dispatch(getPostsPending())
        fetch(`${config.API_URL}/posts?per_page=6&page=${page}`)
            .then( async (res) => {
                return {
                    items: await res.json(),
                    pagination: {
                        total_pages: res.headers.get('X-WP-TotalPages')
                    }
                }
            })
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(getPostsSuccess(res))
                return res
            })
            .catch((error) => {
                dispatch(getPostsError(error))
            })
    }
}