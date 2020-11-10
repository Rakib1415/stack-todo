import React from 'react';
import SearchPanel from './SearchPanel';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';
import FilterController from './FilterController';
import ViewController from './ViewController';
import BulkController from './BulkController';

const Controllers = ({term,  view,filter, searchHandler, toggleForm,filterHandler, changeView, clearCompleted, clearSelected, reset}) => {
    return (
        <div>
            <SearchPanel
            term={term}
            searchHandler={searchHandler}
            toggleForm={toggleForm}
            />
            <Row className='my-4'>
                <Col md={{size:4}}>
                    <FilterController
                    filter={filter}
                    filterHandler={filterHandler}
                    />
                </Col>
                <Col md={{size:4}}>
                    <ViewController
                    view={view}
                    changeView={changeView}
                    />
                </Col>
                <Col md={{size:4}} className='d-flex'>
                    <div className='ml-auto'>
                        <BulkController 
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

Controllers.propTypes = {
    term: PropTypes.string.isRequired,
    view : PropTypes.string.isRequired,
    filter : PropTypes.string.isRequired,
    searchHandler: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    filterHandler: PropTypes.func.isRequired,
    changeView : PropTypes.func.isRequired,
    clearSelected : PropTypes.func.isRequired,
    clearCompleted : PropTypes.func.isRequired,
    reset : PropTypes.func.isRequired
}

export default Controllers;