import React from 'react';
import { Link } from 'react-router-dom'


const PostCard = ({post}) => (

    <div className='post-card'>
        <Link to={`${post.id}/${post.slug}`}>
            <div className='card-image'>
                <img alt='' className='img-fluid' src={post.featured_image}/>
            </div>
            <div className='card-content text-center pt-3'>
                <h5 className='title'> {post.title.rendered} </h5>
                <p className='text-center excerpt'>{post.excerpt.rendered}</p>
            </div>
        </Link>
    </div>

)

export default PostCard