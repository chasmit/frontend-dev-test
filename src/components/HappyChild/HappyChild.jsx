import React, { useState } from 'react';
import { 
    Button, 
    Col, 
    Container, 
    Row } 
    from 'react-bootstrap';

import "./HappyChild.scss";

function HappyChild() {
    const [isAnimated,setIsAnimated] = useState(false);
    
        const handleClick = () => {
            setIsAnimated(!isAnimated);
        };

    return (
        <Container className="happy-child container">
            <Row className="happy-child-text">
                <Col md={6}/>
                <Col md={6}>
                    <h1>LOREM IPSUM</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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

export default HappyChild;