import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import PostCard from './PostCard';


// this container component receives PostCard components and renders them within a responsive grid

class StackContainer extends React.Component{
    
    // read up on using redux to make fetch requests and populate the store!

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map((post, index) => {
            return <PostCard key={index} title={post.title} imgURL={post.imgURL} created={post.created} content={post.content} />
        });
    }

    render(){
        return(
            <Grid relaxed centered>
                <br />
                    {this.renderList()}
                <br />
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(StackContainer);