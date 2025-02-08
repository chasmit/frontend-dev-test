import React from "react";
import {  Col, Container, Image, Row } from "react-bootstrap";

import HikersSunrise from "../../assets/hiking-sunrise.jpg";
import "./Sunrise.scss";

function Sunrise() {
    return (
        <Container className="sunrise container" id="sunrise">
            <Row className="row">
                <Col className="col-md-6 sunrise-col-text">
                    <h1>LOREM IPSUM</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                    </p>
                    <h4 className="dropdown-text">> Lorem Ipsum</h4>
                </Col>
                <Col className="col-md-6 sunrise-col-image">
                    <Image
                        src={HikersSunrise}
                        className="hikers-sunrise"
                        alt="hikers-at-sunrise"
                    />
                </Col>
            </Row>
        </Container>
    )
};

export default Sunrise;

