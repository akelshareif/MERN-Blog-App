import React from 'react';
import { Grid } from 'semantic-ui-react';
import PostCard from './PostCard';

// this container component receives PostCard components and renders them within a responsive grid

const StackContainer = props => {
    return(
        <Grid relaxed centered>
            <br />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <br />
        </Grid>
    );
}

export default StackContainer;