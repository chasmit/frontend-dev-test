import { 
    Col, 
    Container,  
    Image,
    Row 
} from 'react-bootstrap';

import "./IconDetail.scss";

import ClipboardIcon from "../../assets/clipboard-icon.svg";
import MaskIcon from "../../assets/mask-icon.svg";
import GogglesIcon from "../../assets/goggles-icon.svg";
import CalendarIcon from "../../assets/calendar-icon.svg";

const iconData = [
    {
        image: ClipboardIcon,
        text:"LOREM",
        alt:"clipboard-icon",
        url:"https://en.wikipedia.org/wiki/Clipboard"
    },
    {
        image: MaskIcon,
        text:"LOREM IPSUM",
        alt:"mask-icon",
        url:"https://en.wikipedia.org/wiki/Surgical_mask"
    },
    {
        image: GogglesIcon,
        text:"LOREM IPSUM",
        alt:"goggles-icon",
        url:"https://en.wikipedia.org/wiki/Goggles"
    },
    {
        image: CalendarIcon,
        text:"LOREM",
        alt:"calendar-icon",
        url:"https://en.wikipedia.org/wiki/Calendar"
    },
];

function IconDetail() {
    return (
        <Container className="icon-detail" id="icon-detail">
            <Row>
                <Col className="icon-detail-text">
                    <h1>LOREM IPSUM<br/>DOLOR SIT AMET</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <h4>&gt; Lorem Ipsum</h4>
                </Col>
                <Col className="icon-detail-icons">
                    <Container className="icon-detail-icons-grid">
                        {iconData.map((icon) => (
                            <div className="icon-wrapper">
                                <a href={icon.url}>
                                    <Image
                                        src={icon.image}
                                        alt={icon.alt}
                                        className="icon"
                                        fluid
                                    />
                                </a>
                                <p className="icon-text">{icon.text}</p>
                            </div>
                        ))}
                    </Container>
                </Col>
            </Row>
        </Container>
    )
};

export default IconDetail;