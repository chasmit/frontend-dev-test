import React from "react";
import { Col, Container } from 'react-bootstrap';
import { FaStar } from "react-icons/fa";

import TestimonialCarousel from '../TestimonialCarousel/TestimonialCarousel';

import './Testimonial.scss';

const testimonialData = [
    {
        name:"John Doe",
        date:"08/08/2019",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc nibh tempus integer donec porttitor. Odio duis suspendisse potenti scelerisque lobortis et tincidunt. Aenean sociosqu lectus curae tincidunt a faucibus morbi. Habitant sem ante etiam finibus morbi neque nullam. Aliquet porta vulputate etiam taciti condimentum class. Fusce primis dictum orci sed pharetra id eros luctus. Tincidunt nulla semper arcu ante torquent fames dapibus dignissim. Massa quam a euismod nibh auctor netus interdum."
    },
    {
        name:"John Doe",
        date:"01/08/2019",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Eget eu tristique posuere mi ac euismod. Scelerisque dui dictumst lobortis aptent sodales facilisis scelerisque massa ipsum. Vulputate lacus metus torquent himenaeos viverra imperdiet aenean tincidunt ante. Cras accumsan amet sagittis vel ipsum sapien felis himenaeos. Convallis est class leo adipiscing massa platea mus euismod."
    },
    {
        name:"John Doe",
        date:"01/08/2020",
        text:"Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit tortor vulputate magnis orci, pretium sed facilisis porta. Lacus cras metus nam integer magnis elit augue. Nullam cursus lectus maximus ultricies eget pulvinar. Nostra et suspendisse maximus adipiscing auctor auctor. Neque praesent amet parturient finibus ullamcorper placerat porttitor. Nam sapien mauris mi porttitor gravida elit hac."
    }
];

function Testimonial() {
    return (
        <Container className="testimonial">
            <Col className="testimonial-text">
                <h1>LOREM IPSUM<br/>DOLOR SIT AMET</h1>
                <span className="stars">
                    {[...Array(5)].map((_, index) => (
                        <FaStar className="star-svg"/>
                    ))}
                </span>
            </Col>
            <Col className="testimonial-carousel">
                <TestimonialCarousel data={testimonialData} />
            </Col>
        </Container>
    )
};

export default Testimonial;