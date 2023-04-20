import * as React from "react";
import { Link } from "gatsby";
//import { Layout } from "../components/common";

import { Layout, Navigation } from "../components/common";


import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup, Modal } from 'react-bootstrap';

import Axios from "axios";

const UserProfile = () => {

    console.log(window.localStorage.getItem("userId"))
    function status() {
        if (window.localStorage.getItem("status") === "true") { //((ifSeller == true)) 
            return "Seller";  
          }
          else{ //theyre a buyer
            return "Buyer"; 
          } 
    }

    return (
        <Layout>
        <section className="vh-100" style={{ backgroundColor: '#0000' }}>
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                <Col lg="6" className="mb-4 mb-lg-0">
                    <Card className="mb-3" style={{ borderRadius: '.5rem' }}>
                    <Row className="g-0">
                        <Col 
                            md="4" 
                            className="gradient-custom text-center text-white"
                            style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                <Card.Img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                                    alt="Avatar" 
                                    className="my-5" 
                                    style={{ width: '120px', borderRadius: '50%'}} 
                                    //style={{width: 60, height: 60, borderRadius: 60/ 2}} 
                                    fluid 
                                />
                        <Card.Title tag="h5">
                                User ID: {window.localStorage.getItem("userId")}
                        </Card.Title>
                        <br></br>
                        </Col>
                        <Col md="8">
                        <Card.Body className="p-4">
                            <Card.Title style={{textAlign: "center"}}>
                                <h4>Information</h4>
                            </Card.Title>
                            <hr className="mt-0 mb-4" />
                            <Row className="pt-1" style={{textAlign:"center"}}>
                                <Col size="6" className="mb-3">
                                    <Card.Title>
                                        <h6>Username</h6>
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        {console.log(window.localStorage.getItem("username"))}
                                        {window.localStorage.getItem("username")}
                                    </Card.Text>
                                </Col>
                                <Col size="6" className="mb-3">
                                    <Card.Title>
                                        <h6>Status</h6>
                                    </Card.Title>
                                    <Card.Text className="text-muted">
                                        {status()}
                                    </Card.Text>
                                </Col>
                            </Row>

                        </Card.Body>
                        </Col>
                    </Row>
                    </Card>
                </Col>
                </Row>
            </Container>
        </section>
        </Layout>
    );
};

export default UserProfile;

