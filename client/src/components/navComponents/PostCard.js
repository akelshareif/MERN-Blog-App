import React from 'react';
import { Card } from 'semantic-ui-react';
import '../../styles/styles.css';


// this component must receive prop values to dynamically update
// once card is built with new-post data, it must be sent to <StackContainer /> component for rendering
// have card open a new pop-up component when clicked 

const PostCard = props => {

    const handleClick = () => {
        console.log("clicked");
    }
   
    return(

        <Card
            link
            onClick={handleClick}
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM_YGRfI5olnPa5XmGJeDhu5etD9ZrD3PwCz4hmfWF6cPxUACoQ'
            header='Test Card'
            meta='Posted on'
            description='This is a test card with a description.'
            className='margin-right'
        />
    );
}


export default PostCard;