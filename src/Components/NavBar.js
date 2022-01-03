import './NavBar.css';
import {Navbar, Nav} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import bitmoji from '../Assets/bitmoji.png';
import emailIcon from "../Assets/email-icon.png";
// import {Link} from "react-router-dom";

function NavBar() {
  return (
    <>
   
    <Navbar className="Navbar" sticky="top" bg="dark" variant="dark">
      <Container fluid> 

        <Navbar.Brand href="#home">
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
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Internships</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
        </Nav>

        <Nav className='mr-auto d-flex flex-wrap'>
          <Nav.Link href="mailto:jcyuan_johnson@berkeley.edu" >
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



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default NavBar;
