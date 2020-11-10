import React from 'react';
import {Label, CustomInput} from 'reactstrap';
import PropTypes from 'prop-types';

const ViewController = ({view, changeView}) => {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='mr-4'>
                <CustomInput
                type='radio'
                className='d-inline-block'
                name='view'
                id='list-view'
                value='list'
                onChange={changeView}
                checked={view === 'list'}
                /> List view
            </Label>
            <Label for='table-view' className='mr-4'>
                <CustomInput
                type='radio'
                className='d-inline-block'
                name='view'
                id='table-view'
                value='table'
                onChange={changeView}
                checked={view === 'table'}
                /> Table view
            </Label>
        </div>
    );
};

ViewController.propTypes ={
    view : PropTypes.string.isRequired,
    changeView : PropTypes.func.isRequired
}

export default ViewController;