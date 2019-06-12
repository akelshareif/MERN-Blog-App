import React from 'react';
import { Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../../styles/styles.css';

const PostCard = props => {

    return(
        <Card
            link
            as={NavLink}
            to='#'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM_YGRfI5olnPa5XmGJeDhu5etD9ZrD3PwCz4hmfWF6cPxUACoQ'
            header='Test Card'
            meta='Posted on'
            description='This is a test card with a description.'
            className='margin-right'
        />
    );
}



export default PostCard;