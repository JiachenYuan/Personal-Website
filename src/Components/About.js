import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutPic from '../Assets/AboutPic.png';
import Header from '../Components/Header';

function About() {
    // const style = {
    //     background: "#6ADAFD",
    //     borderRadius: "30px",
    //     width: "150px",
    //     height: "50px",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    // }

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
        textAlign:'center',
        fontFamily: 'Oswald',
        fontStyle: 'normal',
        fontSize: '28px'
    };

    const pStyle = {
        textAlign: 'left',
        fontFamily: 'Sansation',
        fontSize: '22px',
        lineHeight: '1.5',
        fontStyle: 'normal',
        fontWeight: 'normal'
    };

    return (
        <>
            {/* <div id="AboutMe" style={{width:"100vw", height:"auto", display:"flex", justifyContent:"center"}}>
                <div style={style}>About me</div>
            </div> */}
            <Header sectionName="About Me" id=""></Header>
            <br />
            <br />
            <Container>
                <Row>
                    <Col md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <img alt="" src={AboutPic} style={picStyle}></img>
                    </Col>
                    <Col md={5}>
                        <div style={textStyle}>
                            {/* TODO: Insert the about me introduction */}
                            <div style={shoutOutStyle}>
                                Hey there! This is Jiachen, a random nerdy CS student at <span style={{color:"#FDB515"}}>UC Berkeley</span>
                            </div>
                            <br />
                            <br />
                            <Container style={{padding:'0'}}>
                                <div style={pStyle}>
                                    Thank you for browsing so far. That means you are not scared away by my stupid face above 👋👋👋
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
            <br />


        </>
    );
}

export default About;