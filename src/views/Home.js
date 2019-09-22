import React, {Component } from 'react';
import PostCard from "../components/home/PostCard";


class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts: [1,3,4,5,6,6]
        }
    }

    render() {
        return <div className='row'>
            {this.state.posts.map(() => (
                <div className='col m6'>
                    <PostCard/>
                </div>
            ))}
            <div className='right-align'>
                <a className="waves-effect waves-light btn-small"><i className="material-icons left">chevron_left</i>button</a> {' '}
                <a className="waves-effect waves-light btn-small"><i className="material-icons right">chevron_right</i>button</a>
            </div>
        </div>
    }
}


export default Home