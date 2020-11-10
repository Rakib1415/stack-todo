import React from 'react';
import { Button, CustomInput } from 'reactstrap';
import PropTypes from 'prop-types'

const TableRow = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <tr>
            <th scope='row'>
                <CustomInput
                id={todo.id}
                type='checkbox'
                checked={todo.isSelect}
                onChange={()=> toggleSelect(todo.id)}
                />
            </th>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
            <Button className="ml-auto" color={todo.isComplete ? 'danger':'success'} onClick={()=> toggleComplete(todo.id)}>
                {todo.isComplete ? 'Completed':'Running'}
            </Button>
            </td>
        </tr>
    );
};

TableRow.propTypes={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}
export default TableRow;