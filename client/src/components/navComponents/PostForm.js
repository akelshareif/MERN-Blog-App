import React from 'react';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

// this contains the form where a new post would be created
// data must be saved to database then send to <PostCard /> component for building and rendering

class PostForm extends React.Component {

    renderInput = formProps => {
        return(
            <div>
                <input
                    {...formProps.input}
                    placeholder={formProps.placeholder}
                    autoComplete='off'
                />
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        );
    }

    renderTextArea = formProps => {
        return(
            <div>
                <Form.TextArea
                    {...formProps.input}
                    label={formProps.label} 
                    placeholder={formProps.placeholder}
                    autoComplete='off'
                    className='zero-margin-bottom'
                />
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        );
    }

    renderError(meta) {
        if(meta.touched && meta.error){
            return(
                <Message
                    error
                    content={meta.error}
                />
            );
        }
    }

    onSubmit(formValues) {
        console.log(formValues);
    }
    
    render() {
        return(
            <Container>
                <Form error onSubmit={this.props.handleSubmit(this.onSubmit)} className='form-style'>
                    <Form.Field>
                        <label>Post Title</label>
                        <Field name='title' component={this.renderInput} placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Image URL</label>
                        <Field name='imgURL' component={this.renderInput} placeholder='Image URL' />
                    </Form.Field>
                    <Form.Field>
                        <Field name='content' component={this.renderTextArea} label='Content' placeholder='Type Content Here...' />
                    </Form.Field>
                    <Button type='submit'>Add Post</Button>
                </Form>
            </Container>
        );
    }
}

const validate = formValues => {
    const errors = {}

    if(!formValues.title){
        errors.title = 'You must enter a title'
    }
    if(!formValues.imgURL){
        errors.imgURL = 'You must enter an Image URL';
    }
    if(!formValues.content){
        errors.content = 'You must provide content for a post';
    }

    return errors;
}

export default reduxForm({
    form: 'createPost',
    validate
})(PostForm);