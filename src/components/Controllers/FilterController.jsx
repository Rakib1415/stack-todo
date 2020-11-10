import React from 'react';
import {ButtonGroup, Button} from 'reactstrap';
import PropTypes from 'prop-types';

const FilterController = ({filterHandler,filter}) => {
    return (
        <ButtonGroup>
            <Button color={filter === 'all' ? 'success':'secondary'} onClick={()=> filterHandler('all')}>All</Button>
            <Button color={filter === 'running' ? 'success':'secondary'} onClick={()=> filterHandler('running')}>Running</Button>
            <Button color={filter === 'completed' ? 'success':'secondary'} onClick={()=> filterHandler('completed')}>Completed</Button>
        </ButtonGroup>
    );
};

FilterController.propTypes ={
    filter: PropTypes.string.isRequired,
    filterHandler : PropTypes.func.isRequired
}

export default FilterController;