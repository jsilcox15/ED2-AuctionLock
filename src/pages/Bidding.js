import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Layout } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Row, Col, Button, Card, Form, Container, FloatingLabel, ListGroup, ListGroupItem  } from 'react-bootstrap';
import ImgGallary from "../pages/ImgGallary.js";


import EnterBid from "../pages/EnterBid.js";


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
   
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const storeId = urlParams.get('id');
    console.log(storeId);

    //fetch('https://dummyjson.com/products/' + storeId)
    //https://i.dummyjson.com/data/products/1/1.jpg
    //.then(res => res.json())
    //.then(console.log);
    //const [users, setUsers] = useState();

    
    const [title, setTitle] = useState(); 
    const [desc, setDesc] = useState(); 
    const [brand, setBrand] = useState(); 

    function pullJson() {
        fetch('https://dummyjson.com/products/' + storeId)
        .then(response => response.json())
        .then(responseData => {
            setTitle(responseData.title);
            setDesc(responseData.description);
            setBrand(responseData.brand);
            //console.log(responseData.images)
        })
        //return
    }
    
    useEffect(() => {
        pullJson()
    }, [])  //{title} //{desc} //{brand}

  return (
    <Layout>
        <Helmet>
            <script src={withPrefix('jiff/jiff-client.js')}></script>
            <script src={withPrefix('jiff/mpc/mpc.js')}></script>   
         </Helmet>
    <div className="App">
    <section class="section-content padding-y bg">
        <div class="container">
    
        <Card style={{height: 650 }}>
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
                                                <div style={{height: 400, width: 400 }}>
                                                    <Carousel autoPlay interval="5000" transitionTime="300" infiniteLoop useKeyboardArrows>
                                                        <div>
                                                            <img className="Img_sl"
                                                                src={"https://i.dummyjson.com/data/products/" + storeId + "/1.jpg"} alt="Imag1"
                                                            />
                                                        </div>
                                                        <div>
                                                            <img className="Img_sl"
                                                                src={"https://i.dummyjson.com/data/products/" + storeId + "/2.jpg"} alt="Img2" />
                                                        </div>
                                                        <div>
                                                            <img className="Img_sl"
                                                                src={"https://i.dummyjson.com/data/products/" + storeId + "/3.jpg"} alt="Img3" />
                                                        </div>
                                                    </Carousel>
                                                </div>
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
                                    {title} 
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
                                {desc}
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
                                                <li>{brand}</li> 
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
                                                <li>{brand}</li>
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