import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import LogoWhite from '../../assets/logo-white.svg';
import "./Hero.scss";

function Hero() {
    const handleClick = (event) => {
        console.log("You have clicked the hero button", event.target);
    }

    return (
        <Container className="hero" id="hero">
            <Row className="row">
                <Image
                    src={LogoWhite}
                    className="hero-rg-logo-white"
                    alt="logo-white"
                />
            </Row>
            <Row className="row">
                <div className="hero-grid-container">
                    <h1 className="text-transparent">WELCOME TO</h1>
                    <h1 className="text-filled">Rooster Grin</h1>
                    <Button 
                        className="hero-button" 
                        class="button" 
                        onClick={handleClick}
                    >
                        BUTTON BUTTON
                    </Button>
                </div>
            </Row>
        </Container>
    )
}

export default Hero;