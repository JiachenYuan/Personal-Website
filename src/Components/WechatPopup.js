import Modal from 'react-bootstrap/Modal'
import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import WechatConnect from '../Assets/WechatConnect.JPG';

function WechatPopup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const buttonStyle = {
      cursor: "pointer"
    }

    return (
      <>

        <SocialIcon style={buttonStyle} network="wechat" onClick={handleShow}/>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>QR Code</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display:'flex', justifyContent:'center'}}><img alt="" src={WechatConnect} width="300px" height="auto"></img></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Done? LoL
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default WechatPopup;