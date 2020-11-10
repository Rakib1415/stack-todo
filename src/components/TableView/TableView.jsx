import React from 'react';
import { Table } from 'reactstrap';
import TableRow from '../TableRow/TableRow';
import PropTypes from 'prop-types'

const TableView = ({todos, toggleSelect, toggleComplete}) => {
    return (
       <Table striped>
           <thead>
               <tr>
                   <th>#</th>
                   <th>Time</th>
                   <th>Todo</th>
                   <th>Action</th>
               </tr>
           </thead>
           <tbody>
               {todos.map(todo=> (
                   <TableRow
                   id={todo.id}
                   todo={todo}
                   toggleComplete={toggleComplete}
                   toggleSelect={toggleSelect}
                   />
               ))}
           </tbody>
       </Table>
    );
};

TableView.propTypes={
    todos:PropTypes.object.isRequired,
    toggleComplete:PropTypes.func.isRequired,
    toggleSelect:PropTypes.func.isRequired
}

export default TableView;