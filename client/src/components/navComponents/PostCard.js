import React from 'react';
import { Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../../styles/styles.css';


// this component must receive prop values to dynamically update
// once card is built with new-post data, it must be sent to <StackContainer /> component for rendering

const PostCard = props => {

    return(
        <Card
            link
            as={NavLink}
            exact
            to='/new/id'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM_YGRfI5olnPa5XmGJeDhu5etD9ZrD3PwCz4hmfWF6cPxUACoQ'
            header='Test Card'
            meta='Posted on'
            description='This is a test card with a description.'
            className='margin-right'
        />
    );
}



export default PostCard;