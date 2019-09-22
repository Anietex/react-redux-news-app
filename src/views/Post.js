import React, {Component} from 'react';
import config from "../config";
import moment from "moment";
import Loader from "../components/shared/Loader";


class Post extends Component{

    constructor(props){
        super(props);

        this.state = {
            posts:null,
            loading: true
        }
    }

    componentWillMount() {
        const {match : {params:{ id}}} = this.props;

        fetch(`${config.API_URL}/posts/${id}`)
            .then((res) => res.json() )
            .then((res) => {
                this.setState(()=> ({
                    post: res,
                    loading: false
                }))
            })
    }

    postContent(){
        return {__html:this.state.post.content.rendered}
    }

    postDate(){
       return  moment(this.state.post.date).format('MMMM DD, YYYY')
    }

    render() {
        return <div>

            {this.state.loading && <div className='row'>
                    <div className='col-md-2 mx-auto my-5 p-5'>
                        <div className='text-center'>
                            <Loader/>
                            <p>Please wait..</p>
                        </div>
                    </div>
                </div>
            }

            {!this.state.loading && <div className='post'>
                <div className='blog-header'>
                    <h1 className='text-center'>{this.state.post.title.rendered}</h1>
                    <h5 className='text-center text-uppercase mt-4'>Published on {this.postDate()} </h5>
                </div>
                <div className='container'>
                    <div className='post-body'>
                        <div className='post-image'>
                            <img  alt={''} className='img-fluid' src={this.state.post.featured_image} />
                        </div>
                        <div className='post-content' dangerouslySetInnerHTML={this.postContent()}/>
                    </div>
                </div>
            </div>}
        </div>




    }
}


export default Post