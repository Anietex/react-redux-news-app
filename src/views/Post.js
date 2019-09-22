import React, {Component} from 'react';


class Post extends Component{


    render() {
        return <div className='post'>
            <div className='header'>
                <h3>It is a long established fact that a reader will be distracted</h3>
            </div>
            <div className='post-body'>
                <div className=''>
                    <img  alt={''} className='responsive-img' src='https://picsum.photos/3000/2000'/>
                </div>
            </div>
        </div>
    }
}


export default Post