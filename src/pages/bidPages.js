import * as React from "react";
//import React, { useState } from 'react';
import { Link } from "gatsby";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup, Modal} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Entered Auctions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Congrats for winning the auction!</h4>
          <p>
           
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Layout>
            <div className="container">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    DEMO FOR WINNER PAGE!
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </Layout>
      </>
    );
  }

  export default App;
  