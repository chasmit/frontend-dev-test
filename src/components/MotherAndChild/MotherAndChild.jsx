import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import "./MotherAndChild.scss";

function MotherAndChild() {
    const [animated,setAnimated] = useState(false);

    const handleClick = () => {
        setAnimated(true);
        setTimeout(() => {
            setAnimated(false);
        }, 1000)
    };

    return (
        <Container className="mother-and-child container" id="mother-and-child">
            <Row>
                <Col className="col-md-12 mother-and-child-text">
                    <h1>LOREM IPSUM</h1>
                    <Button
                        className={animated ? "button-clicked" : "button"}
                        onClick={handleClick}
                    >
                        BUTTON BUTTON
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default MotherAndChild;