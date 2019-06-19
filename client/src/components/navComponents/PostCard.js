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
            image={props.imgURL}
            header={props.title}
            meta={props.created}
            description={props.content}
            className='margin-right'
        />
    );
}


export default PostCard;