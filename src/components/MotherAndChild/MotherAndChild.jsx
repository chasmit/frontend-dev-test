import React, { useState } from 'react';
import { 
    Button, 
    Col, 
    Container, 
    Row } 
from 'react-bootstrap';

import "./MotherAndChild.scss";

function MotherAndChild() {
    const [isAnimated,setIsAnimated] = useState(false);

    const handleClick = () => {
        setIsAnimated(!isAnimated);
    };

    return (
        <Container className="mother-and-child" id="mother-and-child">
            <Row>
                <Col md={12} className="mother-and-child-text">
                    <h1>LOREM IPSUM</h1>
                    <Button
                        className="button"
                        style={{
                            transform: isAnimated ? "rotate(360deg)" : "rotate(0deg)"
                        }}
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