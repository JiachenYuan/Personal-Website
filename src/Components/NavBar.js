import "../Hover-master/css/hover.css";
import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import bitmoji from '../Assets/bitmoji.png';
// import {Link} from "react-router-dom";



function NavBar() {
  return (
    <>
   
    <Navbar className="Navbar" sticky="top" bg="dark" variant="dark">
      <Container fluid> 

        <Navbar.Brand href="#Intro">
          <img
            alt=""
            src={bitmoji}
            width="30"
            height="30"   
            className="d-inline-block align-top"
          />{' '}
          Jiachen's Page
        </Navbar.Brand>
        
        <Nav className="me-auto d-flex flex-wrap" >
          <Nav.Link href="#About" className="button hvr-underline-from-center">About</Nav.Link>
          <Nav.Link href="#Skills" className="button hvr-underline-from-center">Skills</Nav.Link>
          <Nav.Link href="#Coursework" className="button hvr-underline-from-center">Coursework</Nav.Link>
          <Nav.Link href="#Projects" className="button hvr-underline-from-center">Projects</Nav.Link>
          <Nav.Link href="#Internships" className="button hvr-underline-from-center">Internships</Nav.Link>
          

        </Nav>

        <Nav className='mr-auto d-flex flex-wrap'>
          <Nav.Link href="https://drive.google.com/file/d/1CTTSt-FIVAPGw1rGgz1jdhsLiHztTO3x/view?usp=sharing" target="_blank" className="hvr-underline-from-center">
            <span style={{textDecoration:"underline", wordBreak:"break-word"}}>
              Resume
            </span>
          </Nav.Link>
          <Nav.Link href="mailto: jcyuan_johnson@berkeley.edu"  className="hvr-underline-from-center">
            <span style={{textDecoration:"underline", wordBreak: 'break-all'}}>
              jcyuan_johnson@berkeley.edu
            </span>
          </Nav.Link>
        </Nav>



        {/* <Nav> */}
          {/* <Navbar.Text className="justify-content-end"> */}
            {/* <img alt="" src={emailIcon} width="25" height="25"></img> */}
            
                {/* <img alt="" src={emailIcon} width="25" height="25"></img> */}
                {/* jcyuan_johnson@berkeley.edu */}
            {/* <a href="mailto:jcyuan_johnson@berkeley.edu">jcyuan_johnson@berkeley.edu</a> */}
          {/* </Navbar.Text> */}
        {/* </Nav> */}
        {/* </Nav> */}
      </Container>
    </Navbar>
    
    <br />
    <br />
    </>
  );
}

export default NavBar;
