import  Container  from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BioPic from '../Assets/BioPic.png';
import { SocialIcon } from 'react-social-icons';
import WechatPopup from "./WechatPopup";
import BioEllipse from "../Assets/BioEllipse.png";
import './Intro.css';

function Intro() {

    const shoutOutStyle = {
        fontFamily: 'Oswald', 
        fontStyle: 'normal', 
        fontSize: '50px'
    }

    const briefIntroStyle = {
        fontFamily: 'Sansation',
        fontStyle: 'normal',
        fontSize: '25px'
    }

    const socialMediaIconStyle = {
        width: '200px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <>
            <Container className="BioCanva" id="Intro">
                <Row className="align-items-center">
                    <Col md={7} sm={12}>
                        <div className="BioIntro">
                            <p style={shoutOutStyle}>Hi! This is my website! Take a look!</p>
                            <p style={briefIntroStyle}>I’m currently a junior at UC Berkeley studying CS. I am interested in ML, systems, as well as WebDev in general. </p>
                            <p style={briefIntroStyle}>Currently open to internships...</p>
                            <p style={briefIntroStyle}>Feel free to contact me at: </p>
                            <div style={socialMediaIconStyle}>
                                <div><SocialIcon url="https://www.linkedin.com/in/jiachen-yuan-9896a2208/" /></div>
                                <div><SocialIcon url="https://www.instagram.com/jiachen_jy" /></div>
                                <div><WechatPopup></WechatPopup></div>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} sm={12} style={{maxHeight:"500px"}}>
                        <div><img alt={""} src={BioPic} width={"380px"} height={"auto"} style={{zIndex:2, position:"relative", marginLeft:"auto", marginRight:"auto", display:"block"}}></img></div>
                        <div><img alt={""} src={BioEllipse} width={"380px"} height={"auto"} style={{zIndex:1, position:"relative", top:"-400px", marginLeft:"auto", marginRight:"auto", display:"block"}}></img></div>
                    </Col>
                </Row>
            </Container>

            {/* The following code is adapted from https://codepen.io/bisaillonyannick/pen/pvZeGg */}
            <div className="arrow bounce">
                <a className="fa fa-arrow-down fa-2x" href="#About"><svg viewBox="0 0 320 512" width="50" title="angle-down">
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                    </svg>
                </a>
            </div>
            <br />
            <br />
            <br />
        </>
    );
}

export default Intro;


// #999997