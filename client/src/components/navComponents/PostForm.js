import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

// this contains the form where a new post would be created
// data must be saved to database then send to <PostCard /> component for building and rendering

const PostForm = props => {
    return(
        <Container>
            <Form className='form-style'>
                <Form.Field>
                    <label>Post Title</label>
                    <input placeholder='Title' />
                </Form.Field>
                <Form.Field>
                    <label>Image URL</label>
                    <input placeholder='Image URL' />
                </Form.Field>
                <Form.Field>
                    <Form.TextArea label='Content' placeholder='Type Content Here...' />
                </Form.Field>
                <Button type='submit'>Add Post</Button>
            </Form>
        </Container>
    );
}

export default PostForm;