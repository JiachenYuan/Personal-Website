import './Coursework.css';
import Header from '../Components/Header';
import cs61aLogo from '../Assets/cs61aLogo.png';
import cs61bLogo from '../Assets/cs61bLogo.png';
import cs61cLogo from '../Assets/cs61cLogo.png';
import cs188Logo from '../Assets/cs188Logo.png';
import eecs127Logo from '../Assets/eecs127Logo.png';
import cs170Logo from '../Assets/cs170Logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Coursework() {

    // const columnStyle = {
    //     display: "flex",
    //     justifyContent: "center",
    //     flexWrap: "wrap"
        
    // };

    const rowStyle = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignContent: "space-around",
        height:"100%",
        padding:"10px"
    };




    return (
        <div id="Coursework" style={{backgroundColor:'#F1F6FE'}}>
            <br /><br /><br />
            <Header sectionName="Coursework"></Header>
            <br />
            <div style={{display:'flex', justifyContent:'center', textAlign:'center',fontFamily: 'Oswald',fontStyle: 'normal',fontSize: '24px'}}>
                <p>Here is a list of my favorite courses at <span style={{color:'#FDB515'}}>UC Berkeley</span>. Note: last updated on 12/20/2021 </p>
            </div> 

            {/* TODO: The background bounce up effect */}
            <Container>
                <Row className='justify-content-center'>
                    {/* <div style={columnStyle}> */}
                        <Col sm={5} md={6} lg={3}>
                            <div style={rowStyle}>
                                <div className='coursePic'>
                                    <img alt="61a" src={cs61aLogo}></img> 
                                    <div className='overlay'>
                                        <div className='text'><span style={{color: "#0077b6", fontSize:"30px"}}>CS61A</span> is my first CS class. It covers a wide range of concept of computer programs. It provided me with solid Python programming skills, as well as the way to think like a "programmer".</div>
                                    </div>
                                </div>
                                <div className='coursePic'>
                                    <img alt="61c" src={cs61cLogo}></img> 
                                    <div className='overlay'>
                                        <div className='text'><span style={{color: "#0077b6", fontSize:"30px"}}>CS61C</span> is by far my favorite course. It leads me to down the stack to many the mysterious components and mechanisms of modern computer architectures. I now know how a computer really works at a low level.</div>
                                    </div>
                                </div>
                            </div>
                        </Col>    
                        <Col sm={5} md={6} lg={3}>
                            <div style={rowStyle}>
                                <div className='coursePic'>
                                    <img alt="188" src={cs188Logo}></img> 
                                    <div className='overlay'>
                                        <div className='text'><span style={{color: "#0077b6", fontSize:"30px"}}>CS188</span> is a fun AI-intro class. I was introduced to so many useful models and machine learning basics. A semester long 5-stage project was done. The course is demanding but extremely fun! </div>
                                    </div>
                                </div>
                                <div className='coursePic'>
                                    <img alt="61b" src={cs61bLogo}></img> 
                                    <div className='overlay'>
                                        <div className='text'><span style={{color: "#0077b6", fontSize:"30px"}}>CS61B</span> is about data structure and related algorithm. For the first time I realized the convenience and flexibitily of various data structures. With hands-on realization of most of the common ones, I am more aware of choosing the right ones depending on the situations.</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        
                        <Col sm={5} md={6} lg={3}>
                            <div style={rowStyle}>
                                <div className='coursePic'>
                                    <img alt="127" src={eecs127Logo}></img> 
                                    <div className='overlay'>
                                        <div className='text'><span style={{color: "#0077b6", fontSize:"30px"}}>EECS127</span> is about advanced linalg, convex optimization, and duality. Despite the difficulty, it prepared the so-called "mathmetical maturity" so well for me and aroused my interest in the field.</div>
                                    </div>
                                </div>
                                <div className='coursePic'>
                                    <img alt="170" src={cs170Logo}></img> 
                                    <div className='overlay'>
                                        <div className='text'><span style={{color: "#0077b6", fontSize:"30px"}}>CS170</span> BOOM! Welcome to advanced algorithm! It brought my algorithmic thinking one entire level up. It is always interesting to try to stand in a real computer scientist's shoes to think about the tradeoff between time and space. However, it was so hard... But I survived and actually did well! Phew~ </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    {/* </div> */}
                </Row>
            </Container>
        <br /><br /><br />
        </div>
        
    );
}

export default Coursework;