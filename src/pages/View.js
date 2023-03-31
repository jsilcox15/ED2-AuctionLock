import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const View = ({ data }) => {
  return (
    <Layout>
        <div className="container">
        <div style={{textAlign: "center"}}>
            <h2> A Fresh Auction!? </h2> 
            <h2>
                <a style={{ fontSize: 40 }}>&#127881;</a> 
                    How exciting! A new auction has been created!!!  
            </h2>
        </div> </div>

        <div class="container">
            <hr style={{height: '2px', borderWidth: 0, color: '#5A5A5A', backgroundColor: '#5A5A5A'}} />
        </div>

        <section class="section-content padding-y bg">
        <div class="container">
        <Card style={{height: 650 }}>
            <Card.Header style={{ textAlign:'center' }}>&#128337; Ends {data?.endDate}</Card.Header>
            <Card.Body>
                    <Row>
                        <Col md={6}>
                            <aside>
                                <section>
                                    <Row>
                                    <div>
                                        <div style={{height: 450, width: 400 }}>
                                            <Carousel autoPlay interval="5000" transitionTime="300" infiniteLoop useKeyboardArrows>
                                                <div>
                                                    <img
                                                        src="https://picsum.photos/180/100?img=2" alt="random" />
                                                </div>
                                                <div>
                                                    <img
                                                        src="https://picsum.photos/180/100?img=3" alt="random" />
                                                </div>
                                                <div>
                                                    <img
                                                        src="https://picsum.photos/180/100?img=4" alt="random" />
                                                </div>
                                            </Carousel>
                                        </div>
                                    </div>
                                    </Row>
                                </section>
                            </aside>
                        </Col>
                        <Col sm={1}/>
                        <Col md={4}>
                        <main>
                            <section>
                                <a href="#" class="text-primary btn-link"></a>
                                <h2 class="title">
                                    {data?.title} 
                                </h2>
                                <div>
                                    <Card.Text style={{textAlign: "center"}}>
                                        <p>
                                            &#128129; Category: {data?.category}
                                        </p>
                                    </Card.Text>
                                    <hr style={{height: '2px', borderWidth: 0, color: '#5A5A5A', backgroundColor: '#5A5A5A'}} />
                                </div> 

                                <div class="mb-4">
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="name">
                                                <Form.Label 
                                                    style={{ color: 'black', textAlign:'left' }}
                                                > 
                                                    Bid Amount $: 
                                                </Form.Label>
                                                <Form.Control
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="Enter Bid Amount" 
                                                    size="lg"
                                                />
                                            </Form.Group>
                                        </Row>

                                        <Row />

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="name">
                                                <Form.Label style={{ color: 'black', textAlign:'left' }}> Party ID: </Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="ID" 
                                                    size="lg"
                                                />
                                            </Form.Group>
                                        </Row>

                                        <Row />

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="name">
                                                <Form.Label style={{ color: 'black', textAlign:'left' }}> Token </Form.Label>
                                                <Form.Control 
                                                    type="text" 
                                                    name="name" 
                                                    placeholder="Auth" 
                                                    size="lg"
                                                />
                                            </Form.Group>
                                        </Row>

                                        <Row />
                                        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Button as="input" size="lg" variant="outline-success" type="button" value="Submit" />
                                        </div>
                                    </Form>
                                </div>
                            </section> 
                        </main>
                        </Col>
                    </Row> 
            </Card.Body>
            <p id="testoutput"></p>
        </Card>

        <Row><div></div></Row>

        <article class="mt-5">
            <Card>
                <Card.Header style={{ textAlign:'center' }}>&#128337; Ends {data?.endDate}</Card.Header>
                <Card.Body>
                    <h2 style={{ color: 'black', textAlign:'center' }}>Description: </h2>
                        <Container>
                            <p style={{ color: 'black', textAlign:'left' }}>
                                {data?.description}
                            </p>
                        </Container>
                <hr style={{height: '2px', borderWidth: 0, color: '#5A5A5A', backgroundColor: '#5A5A5A'}} />
                <Container>
                    <Row>
                        <Col>
                            <aside>
                                <h4 style={{ textAlign:'center' }}>Manufacturer</h4>
                                <Row>
                                    <Container>
                                        <Col md={11} style={{ color: 'black'}}>
                                            <dd style={{ color: 'black', textAlign:'center' }}> 
                                                <li>{data?.manufacturer}</li> 
                                            </dd>
                                        </Col>
                                    </Container>
                                </Row>
                            </aside> 

                            <aside>
                                <h4 style={{ color: 'black', textAlign:'center' }}>Brand Name</h4>
                                <Row>
                                    <Container>
                                        <Col md={11} style={{ color: 'black'}}>
                                            <dd style={{ color: 'black', textAlign:'center' }}> 
                                                <li>{data?.brand}</li>
                                            </dd>
                                        </Col>
                                    </Container>
                                </Row>
                            </aside> 
                        </Col>
                       
                        <Col>
                            <aside>
                                <h4 style={{ color: 'black', textAlign:'center' }}>Condition</h4>
                                <Row>
                                    <Container>
                                        <Col md={11} style={{ color: 'black'}}>
                                            <dd style={{ color: 'black', textAlign:'center' }}> 
                                                <li>{data?.condition}</li> 
                                            </dd>
                                        </Col>
                                    </Container>
                                </Row>
                            </aside>
                        </Col>
                    </Row> </Container>
                </Card.Body>  
            </Card>
        </article>
        </div>
    </section>
    </Layout>
  );
};

export default View;