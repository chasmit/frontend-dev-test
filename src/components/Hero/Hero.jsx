import { Button, 
    Container, 
    Image, 
    Row 
} from 'react-bootstrap';

import LogoWhite from '../../assets/logo-white.svg';
import "./Hero.scss";

function Hero() {
    const handleClick = (event) => {
        console.log("You have clicked the hero button", event.target);
    }

    return (
        <Container className="hero container" id="hero">
            <Row className="hero-row-logo">
                <Image
                    src={LogoWhite}
                    className="hero-rg-logo-white"
                    alt="logo-white"
                />
            </Row>
            <Row className="hero-row-text">
                <h1 className="text-transparent">WELCOME TO</h1>
                <h1 className="text-filled">Rooster Grin</h1>
                <Button 
                    className="hero-button" 
                    class="button" 
                    onClick={handleClick}
                >
                    BUTTON BUTTON
                </Button>
            </Row>
        </Container>
    )
}

export default Hero;