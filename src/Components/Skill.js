import { Container } from 'react-bootstrap';
import Header from '../Components/Header';
import C from '../Assets/C.png';
import Python from '../Assets/Python.png';
import Java from '../Assets/Java.png';
import NodeJS from '../Assets/NodeJS.png';
import react from '../Assets/React.png';
import Flask from '../Assets/Flask.png';
import MongoDB from '../Assets/MongoDB.png';

function Skill() {
    const skillPicDivStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    };

    const subDivStyle = {
        display: "flex",
        alignItems: "center"
    }


    return (
        <>
            <Header sectionName="Skills" id="Skills"></Header>
            <br />
            <br />
            <Container>
                <div style={skillPicDivStyle}>
                    <div style={subDivStyle}><img alt="" src={C}></img></div>
                    <div style={subDivStyle}><img alt="" src={Python}></img></div>
                    <div style={subDivStyle}><img alt="" src={Java}></img></div>
                    <div style={subDivStyle}><img alt="" src={NodeJS}></img></div>
                    <div style={subDivStyle}><img alt="" src={react}></img></div>   
                    <div style={subDivStyle}><img alt="" src={Flask}></img></div>   
                    <div style={subDivStyle}><img alt="" src={MongoDB}></img></div>
                </div>
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
