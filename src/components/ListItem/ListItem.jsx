import React from 'react';
import {ListGroupItem, CustomInput, Button} from 'reactstrap';
import PropTypes from 'prop-types';

const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    console.log(todo)
    return (
        <ListGroupItem className="d-flex align-items-center">
            <CustomInput
            id={todo.id}
            type='checkbox'
            checked={todo.isSelect}
            onChange={()=> toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h2>{todo.text}</h2>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button className="ml-auto" color={todo.isComplete ? 'danger':'success'} onClick={()=> toggleComplete(todo.id)}>
                {todo.isComplete ? 'Completed':'Running'}
            </Button>

        </ListGroupItem>
    )
};

ListItem.propTypes ={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

export default ListItem;