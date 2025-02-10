import { Container, Image } from 'react-bootstrap'

import InstagramLogo from "../../assets/instagram-logo.svg";
import FacebookLogo from "../../assets/facebook-logo.svg";

import "./Footer.scss";

function Footer() {
    return(
        <Container className="footer">
            <h4 className="footer-text">Follow Us:</h4>
            <a href="https://www.instagram.com/">
                <Image className="img-filter-purple" src={InstagramLogo}></Image>
            </a>
            <a href="https://www.facebook.com/">
                <Image className="img-filter-purple" src={FacebookLogo}></Image>
            </a>
        </Container>
    )
};

export default Footer;
