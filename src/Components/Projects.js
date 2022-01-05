import "./Projects.css"
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Components/Header.js';

const boxStyle = {
    width:"300px",
    height:"max-content",
    backgroundColor:"#F1F6FE",
    padding:'30px',
    borderRadius:"10px",
    border:"1px solid #6ADAFD"
};

function Projects() {
    return (
        <>

        <Header sectionName="Projects" id="Projects" />
        <br /> <br /> 

        <Container>
            <Row className="Row">
                <Col className="Col" md={4} sm={6}>
                    <div className="hvr-grow-shadow card" style={boxStyle}>
                        <div><h2 className="align-top text-center">Classify</h2></div>
                        <div className="text-center">Implemented elementary linear algebra functions as well as optimized matrix manipulation algorithms using RISC-V
                                assembly language and C to support basic supervised classifying machine learning problems; Accelerated certain matrix manipulation algorithms to take advantage of cache properties and SIMD
                                computation.
                        </div>
                    </div>
                </Col>
                <Col className="Col" md={4} sm={6}>
                    <div className="hvr-grow-shadow card" style={boxStyle}>
                        <div><h2 className="align-top text-center">JGit</h2></div>
                        <div className="text-center">
                            It's a Java version replica of Git as an MVP(Minimum Viable Product). It supports basic version control functionalities locally. Also supports basic branching management and merging ability.
                        </div>
                    </div>
                </Col>
                <Col className="Col" md={4} sm={6}>
                    <div className="hvr-grow-shadow card" style={boxStyle}>
                        <div><h2 className="align-top text-center">Pacman with AI</h2></div>
                        <div className="text-center">
                            With the use of search algorithm, logical inference, and deep learning algorithms, established autonomous Pacman and Ghosts
                            agents with the ability to locate themselves and decide the best policies to compete in the simulated Pacman world.
                        </div>
                    </div>
                </Col>
                <Col className="Col" md={4} sm={6}>
                    <div className="hvr-grow-shadow card" style={boxStyle}>
                        <div><h2 className="align-top text-center">Long Long Road</h2></div>
                        <div className="text-center">
                            Completely different from finding a shortest path, which is an NP problem, finding a longest path is deemed NP-hard.
                            We as a group designed a mixed algorithm using multiple gradient descent and randomization concepts to find the longest
                            possible path in a complex graph involving more than 100 nodes given certain node/edge removal budgets;
                            The algorithm was ranked at top 15%.
                        </div>
                    </div>
                </Col>
                <Col className="Col" md={4} sm={6}>
                    <div className="hvr-grow-shadow card" style={boxStyle}>
                        <div><h2 className="align-top text-center">Personal Website</h2></div>
                        <div className="text-center">
                            This is my first individual web development project. Yes, it is the page that you are browsing right now! In the Christmas holiday,
                            I decided to build a website of my own.
                            I mainly used ReactJS and bootstrap to achieve all the effects you see. Well, other than that I don't have anything else to say. 
                             However, notice this site is still under development... 
                        </div>
                    </div>
                </Col>
                <Col className="Col" md={4} sm={6}>
                    <div className="hvr-grow-shadow card" style={boxStyle}>
                        <div><h2 className="align-top text-center">Python-based Scheme Interpreter</h2></div>
                        <div className="text-center">
                            Recursively parse the codes written in Scheme, and understand and execute them using Python language. It supports reading basic
                            variable definition, control flow, arithmetics, procedure definition, etc. 
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
        <br />
        <br />
        </>
    )
}

export default Projects
