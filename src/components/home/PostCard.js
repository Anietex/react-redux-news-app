import React from 'react';
import { Link } from 'react-router-dom'


const PostCard = () => (
            <div className="card">
                <div className="card-image">
                    <img src="https://picsum.photos/300/200" />
                        <span className="card-title">Card Title</span>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <Link to='/45555' href="#">This is a link</Link>
                </div>
            </div>

)

export default PostCard