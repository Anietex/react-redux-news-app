import React, {Component } from 'react';
import {connect} from 'react-redux';
import PostCard from "../components/home/PostCard";
import fetchPosts from "../store/actions/fetchPosts";
import {getPosts, getPostsPending, getPostsError } from "../store/reducers";
import {bindActionCreators} from "redux";
import {Link} from "react-router-dom";
import qs from 'query-string';



class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
           page: qs.parse(this.props.location.search).page || 1,
        }
    }

    componentWillMount() {
        this.getPosts();
    }

    componentDidUpdate (prevProps) {
        let prevPage =  qs.parse(prevProps.location.search).page;
        let newPage = qs.parse(this.props.location.search).page;

        //Monitor page change and make a fetch posts
        if(prevPage !== newPage){
            this.setState(() => (
                {page: newPage }
            ),()=> {
                this.getPosts();
            })
        }
    }

    getPosts =() =>{
        console.log('p--x',this.state.page)
        const { fetchPosts } = this.props
        fetchPosts(this.state.page)
    }

    render() {
        return <div className='home'>
            <div className='blog-header'>
                <h1 className='text-center'>Epower Blog</h1>
            </div>
            <div className='blog-body'>
                <div className='container'>
                    <div className='row no-gutters'>

                            {this.props.posts && this.props.posts.items.map((post) => (
                                <div className='col-lg-4 p-4' key={post.id}>
                                            <PostCard post={post}/>
                                </div>
                                    ))}
                    </div>
                </div>
                <div className='blog-pagination'>
                    <div className='row'>
                        <div className='col-md-3 mx-auto'>
                            { this.props.posts && <div className='d-flex'>
                                { this.state.page > 1 && <Link to={`/?page=${this.state.page-1}`} className='btn mr-5'>Previous</Link>}
                                { parseInt(this.props.posts.pagination.total_pages) > parseInt(this.state.page) && <Link to={`/?page=${parseInt(this.state.page)+1}`} className='btn ml-5'>Next</Link>}
                            </div>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </div>
    }
}


const mapStateToProps = (state) => {
    return{
        error: getPostsError(state),
        pending: getPostsPending(state),
        posts: getPosts(state)
    }
}

const mapDispatchToProps = dispatch =>bindActionCreators({
    fetchPosts
},dispatch);


const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeView