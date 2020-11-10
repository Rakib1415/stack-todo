import React from 'react';
import Todos from './components/Todos/Todos';
import {Container, Row, Col} from 'reactstrap';


function App(){
    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Todos/>
                </Col>
            </Row>
        </Container>
    )
}

export default App;