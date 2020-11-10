import React from 'react';
import {Button, Input} from 'reactstrap';
import PropTypes from 'prop-types';

const SearchPanel = ({term, searchHandler, toggleForm}) => {
    return (
        <div className='d-flex'>
            <Input
            className='mr-3'
            placeholder='Enter search term'
            value={term}
            onChange={e => searchHandler(e.target.value)}
            />
            <Button color='success' onClick={toggleForm}>Add</Button>
            
        </div>
    );
};

SearchPanel.propTypes = {
    term : PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}
export default SearchPanel;