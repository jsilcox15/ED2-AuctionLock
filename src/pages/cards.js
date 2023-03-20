import React, { useState, useRef } from "react";
import { Link } from "gatsby";

import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Layout } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Button, Card, Form, Container, FloatingLabel, ListGroup, ListGroupItem  } from 'react-bootstrap';
import ImgGallary from "../pages/ImgGallary.js";

import carImg from "../images/car_box1.png";
import phoneImg from "../images/phone_box2.png";
import scaleImg from "../images/laptop_box.png";
import unknownImg from "../images/import-image.png";


const BidPage = () => {
    let jiff_instance;
    const [bidValue, setBidValue] = useState('');
    const [partyId, setPartyId] = useState('');

    const mpc = window.mpc;

    function demoSubmit() {
        const INPUT_PARTIES = 3;
        const COMPUTE_PARTIES = 2;
        const COMPUTATION_ID = "auction-test";
        var options = { party_count: INPUT_PARTIES + COMPUTE_PARTIES, party_id: parseInt(partyId, 10), Zp: 127 };

        let hostname = "http://localhost:8080";

        console.log(`Submitting bid with value ${bidValue} and partyId ${partyId}`);

        jiff_instance = mpc.connect(hostname, COMPUTATION_ID, options);
        var upper_parties = ['s1'];
        for (var i = INPUT_PARTIES + 1; i <= INPUT_PARTIES + COMPUTE_PARTIES; i++) {
          upper_parties.push(i);
        }
        jiff_instance.wait_for(["s1", 4, 5], function() {
            var promise = mpc.compute({ value: parseInt(bidValue, 10), compute_count: COMPUTE_PARTIES, input_count: INPUT_PARTIES });
            promise.then(function (r) {
                let output = document.getElementById("testoutput");
                output.innerText = `The winner is party ${r}`;
            });
        });
    }

  return (
    <Layout>
        <Helmet>
            <script src={withPrefix('jiff/jiff-client.js')}></script>
            <script src={withPrefix('jiff/mpc/mpc.js')}></script>   
         </Helmet>
    <div className="App">
    <section class="section-content padding-y bg">
        <div class="container">
    
        <Card>
            <Card.Header>Started TIMEEEEEE</Card.Header>
            <Card.Body>
                    <Row>
                        <Col md={6}>
                            <aside>
                                <section>
                                    <Row>
                                    <div>
                                        <Container>
                                            <div>
                                                <ImgGallary />
                                            </div>
                                        </Container>
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
                                  Daisy Cup Iced Coffee Cup Glass 
                                - Beer Can Glass - Retro Flower Iced Coffee Cup 
                                - Glass Cup Coffee Can Beer - Daisy Soda Can Glass 
                                </h2>
                                <div>
                                    <a href="#"> <i class="fa fa-heart"></i> Save for later </a>
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
                                                    onChange={(e) => setBidValue(e.target.value)}
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
                                                    onChange={(e) => setPartyId(e.target.value)}
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
                                        <Button onClick={demoSubmit} as="input" size="lg" variant="outline-success" type="button" value="Submit" />
                                    </Form>
                                </div>
                            </section> 
                        </main>
                        </Col>
                    </Row> 
            </Card.Body>
            <p id="testoutput"></p>
           <Card.Footer className="text-muted">Started TIMEEE</Card.Footer> 
        </Card>

        <Row><div></div></Row>

        <article class="mt-5">
            <Card>
                <Card.Body>
                    <h2>Description: </h2>
                        <Container>
                            <p style={{ color: 'black', textAlign:'left' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Container>
                <hr style={{height: '2px', borderWidth: 0, color: '#5A5A5A', backgroundColor: '#5A5A5A'}} />
                <Container>
                    <Row>
                        <Col>
                            <aside>
                                <h4>Manufacturer</h4>
                                <Row>
                                    <Container>
                                        <Col md={11} style={{ color: 'black'}}>
                                            <dd style={{ color: 'black', textAlign:'center' }}> 
                                                <li>Display:: Hub Intel</li> 
                                            </dd>
                                        </Col>
                                    </Container>
                                </Row>
                            </aside> 

                            <aside>
                                <h4>Brand Name</h4>
                                <Row>
                                    <Container>
                                        <Col md={11} style={{ color: 'black'}}>
                                            <dd style={{ color: 'black', textAlign:'center' }}> 
                                                <li>MC SHAPE WEAR</li>
                                            </dd>
                                        </Col>
                                    </Container>
                                </Row>
                            </aside> 
                        </Col>
                       
                        <Col>
                            <aside>
                                <h4>Condition</h4>
                                <Row>
                                    <Container>
                                        <Col md={11} style={{ color: 'black'}}>
                                            <dd style={{ color: 'black', textAlign:'center' }}> 
                                                <li>GOOD</li> 
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
    </div>
    </Layout>
  );
}

export default BidPage;