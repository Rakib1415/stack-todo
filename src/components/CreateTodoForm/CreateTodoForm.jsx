import React, { Component } from 'react';
import {Form, Label, FormGroup, Input, Button} from 'reactstrap';
import PropTypes from 'prop-types';


class CreateTodoForm extends Component {
    state = {
        text:'',
        description:''
    }
    changeHandler = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.createTodo(this.state);
        event.target.reset();
        this.setState({text:'', description:''})
    }
    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <FormGroup>
                    <Label>Enter Text</Label>
                    <Input
                    placeholder="Enter some text"
                    value={this.state.text}
                    name='text'
                    onChange={this.changeHandler}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Enter Description</Label>
                    <Input
                    type='textarea'
                    placeholder="Enter some sort description"
                    value={this.state.description}
                    name='description'
                    onChange={this.changeHandler}
                    />
                </FormGroup>
                <Button type='submit'>Create Task</Button>
            </Form>
        );
    }
}

CreateTodoForm.propTypes  ={
    createTodo:PropTypes.func.isRequired,
}
export default CreateTodoForm;