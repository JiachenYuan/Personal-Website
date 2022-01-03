import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/Header';
import C from '../Assets/C.png';
import Python from '../Assets/Python.png';
import Java from '../Assets/Java.png';
import NodeJS from '../Assets/NodeJS.png';
import react from '../Assets/React.png';
import Flask from '../Assets/Flask.png';
import MongoDB from '../Assets/MongoDB.png';

function Skill() {
    // const skillPicDivStyle = {
    //     display: "flex",
    //     justifyContent: "space-between",
    //     flexWrap: "wrap"
    // };

    const subDivStyle = {
        display: "flex",
        justifyContent:"center"
    }


    return (
        <>
            <Header sectionName="Skills" id="Skills"></Header>
            <br />
            <br />
            <Container>
                {/* <div style={skillPicDivStyle}>
                    <div style={subDivStyle}><img alt="" src={C}></img></div>
                    <div style={subDivStyle}><img alt="" src={Python}></img></div>
                    <div style={subDivStyle}><img alt="" src={Java}></img></div>
                    <div style={subDivStyle}><img alt="" src={NodeJS}></img></div>
                    <div style={subDivStyle}><img alt="" src={react}></img></div>   
                    <div style={subDivStyle}><img alt="" src={Flask}></img></div>   
                    <div style={subDivStyle}><img alt="" src={MongoDB}></img></div>
                </div> */}
                <Row className="align-items-center justify-content-center">
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={C} style={{margin:"20px"}}></img></div></Col>
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={Python} style={{margin:"20px"}}></img></div></Col>
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={Java} style={{margin:"20px"}}></img></div></Col>
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={NodeJS} style={{margin:"20px"}}></img></div></Col>
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={react} style={{margin:"20px"}}></img></div></Col>
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={Flask} style={{margin:"20px"}}></img></div></Col>
                    <Col sm={3} md="auto"><div style={subDivStyle}><img alt="" src={MongoDB} style={{margin:"20px"}}></img></div></Col>

                </Row>
            </Container>
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Skill;
