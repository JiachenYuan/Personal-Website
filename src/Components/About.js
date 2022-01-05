import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutPic from '../Assets/AboutPic.png';
import Header from '../Components/Header';


function About() {

    const picStyle = {
        width: "65%",
        height: "auto"
    };

    const textStyle = {
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        overflow:'wrap'
    };

    const shoutOutStyle = {
        color: "black",
        textAlign:'center',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontSize: '28px',
        marginBottom: "20px"
    };

    const pStyle = {
        color:"black",
        textAlign: 'left',
        fontFamily: 'Sansation',
        fontSize: '22px',
        lineHeight: '1.5',
        fontStyle: 'normal',
        fontWeight: 'normal'
    };

    return (
        <>
            <div id="About" style={{backgroundColor: '#F1F6FE', width:"100%", height:'auto'}}>
                <br />
                <br />
                <br />
                <Header sectionName="About Me" id=""></Header>
                <br />
                <br />
                <Container>
                    <Row>
                        <Col md={6} sm={12} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <img alt="" src={AboutPic} style={picStyle} className='hvr-bounce-in'></img>
                        </Col>
                        <Col md={5}>
                            <div style={textStyle}>
                                <div style={shoutOutStyle}>
                                    Hey there! This is Jiachen, a passionate CS student at <span style={{color:"#FDB515"}}>UC Berkeley</span>
                                </div>

                                <Container style={{padding:'0'}}>
                                    <div style={pStyle}>
                                        Thank you for browsing so far. I hope that big picture of me above did not scare you away (I mean not so many people put their head shot on the front page 😂😂...)
                                    </div>
                                    <br />
                                    <div style={pStyle}>
                                        Thanks again for your interest.

                                        Let me tell you a bit more about myself. Although being a software engineer, I have many hobbies.  I love photography (I’m bad at it tho...). I can also play a bit of guitar and ukulele.

                                        I like building software. I’ve done an internship at a startup doing surgical robot. I am also currently an apprentice in one of the AI labs from TsingHua University.
                                    </div>
                                    <br />
                                    <div style={pStyle}>
                                        Feel free to check out all the relavent details below... 👇
                                    </div>
                                </Container>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            


                <br />
                <br />
                <br />
            </div>


        </>
    );
}

export default About;