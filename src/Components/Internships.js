import Carousel from 'react-bootstrap/Carousel';
import RonovoBg from '../Assets/Ronovo.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CPythonBridge from '../Assets/python-C++.png';
import logVisualizer from '../Assets/log-visualizer.jpg';
import InternPlaceholder from '../Assets/InternPlaceholder.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/Header';


export default function Internships() {
    
    return (
        <div>
            <div style={{zIndex:"10", position:"relative", top:"100px"}}><Header sectionName="Internships" id="Internships" /></div>
            <Carousel>
                {/* Slide 1 */}
                <Carousel.Item style={{height:'auto'}}>
                    <img 
                        src={RonovoBg}
                        alt="First slide"
                        style={{
                            width:'100vw',
                            height:'120vh'
                        }}
                    />
                    <Carousel.Caption style={{top:'16%', overflowY:"auto", overflowX:"hidden"}}>
                        <h3>Software Engineer Intern @ Ronovo Surgical</h3>
                        <p>Summer 2021 from May to August</p>
                        <p>I worked as a tool engineer intern in the startup developing some testing tools for internal use.</p>
                        <br />
                        <Row>
                            {/* Card 1 */}
                            <Col className='d-flex justify-content-center' style={{marginBottom:"10px"}}>
                                <Card bg="dark" text="light" style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={CPythonBridge} />
                                    <Card.Body>
                                        <Card.Title>Code Bridge</Card.Title>
                                        <Card.Text>
                                            Developed an automatic code generator to exisiting codebase for bridging C++ and Python
                                        </Card.Text>
                                        <Button variant="primary" href="https://github.com/JiachenYuan/intern-project/tree/master/PyBind/PyBind" target='_blank'>Source Code</Button>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Card 2 */}
                            <Col className='d-flex justify-content-center' style={{marginBottom:"10px"}}>
                                <Card bg="dark" text="light" style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={logVisualizer} style={{width:'100%', height:'auto'}}/>
                                    <Card.Body>
                                        <Card.Title>Log Visualizer</Card.Title>
                                        <Card.Text>
                                            Created an interactive data visualizer for log data generated. Support multiple application's log level filter, error detailing, section magnifier, etc.
                                        </Card.Text>
                                        <Button variant="primary" href="https://github.com/JiachenYuan/intern-project/tree/master/Flask_latest" target='_blank'>Source Code</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Caption>
                </Carousel.Item>




                {/* TODO: Slide 2 */}
                <Carousel.Item style={{height:'auto'}}>
                    <img 
                        src={InternPlaceholder}
                        alt="Second slide"
                        style={{
                            width:'100vw',
                            height:'120vh'
                        }}
                    />
                    <Carousel.Caption style={{top:'16%', overflowY:"auto", overflowX:"hidden"}}>
                        <h2>I currently do not have another internship... It's a next step for me!</h2>
                        <p>However, if you are gracious enough to offer me another SWE opportunity, feel free to contact me by phone or just throw me an email! It would be greatly appreciated!</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
};
