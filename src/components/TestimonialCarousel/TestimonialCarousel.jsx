import React, { useState } from 'react';

import './TestimonialCarousel.scss';

const TestimonialCarousel = ({data}) => {
    const dataLength = data.length;
    const [index, setIndex] = useState(0);

    const setPreviousSlide = () => {
        setIndex((index) => (index - 1 + dataLength) % dataLength);
    }

    const setNextSlide = () => {
        setIndex((index) => (index + 1) % dataLength);
    }

    return (
        <div className="carousel-container">
            <button className="carousel-button previous" onClick={setPreviousSlide}>
                &lt;
            </button>
                <div className="carousel-content">
                {data.map((item, idx) => (
                    <div key={idx} className={`carousel-item ${idx === index ? "active" : "hidden"}`}>
                        <h1>{item.name} {item.date}</h1>
                        <p>{item.text}</p>
                    </div>
                ))}
                </div>
            <button className="carousel-button next" onClick={setNextSlide}>
                &gt;
            </button>
            <div className="carousel-indicators">
                {data.map((_, idx) => (
                    <span key={idx} className={idx === index ? "selected" : ""}></span>
                ))}
            </div>
        </div>
    )
};

export default TestimonialCarousel;
