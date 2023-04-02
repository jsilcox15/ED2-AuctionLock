import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Layout } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { Row, Col, Button, Card, Form, Container, FloatingLabel, ListGroup, ListGroupItem  } from 'react-bootstrap';
//import ImGallary from "../pages/ImgGallary.js";
//import Trial from "../pages/trial.js";
import { isArray } from "lodash";

import Axios from "axios";


const BidPage = () => {
    let myPartyId;

    let jiff_instance;
    const [bidValue, setBidValue] = useState('');

    const mpc = window.mpc;

    function demoSubmit() {
        const COMPUTATION_ID = "auction-test";

        let hostname = "http://localhost:8080";

        let options = {
            initialization: {token: "asdf"},
        };

        let jiff_instance = mpc.connect(hostname, COMPUTATION_ID, options);

        jiff_instance.wait_for(mpc.JUDGE_IDS.concat("s1"), () => {
            console.log("I am ID: " + jiff_instance.id);
            myPartyId = jiff_instance.id;
            jiff_instance.share(parseInt(bidValue, 10), 2, mpc.JUDGE_IDS.concat("s1"), [ jiff_instance.id ]);
            jiff_instance.disconnect(true, true);
        });
    }

    function checkResults() {
        Axios.get("http://localhost:9999/jiff/results").then((response) => {
            let results = response.data.results;
            let winnerId = results[0];
            let winnerAmount = results[1];
            let tieCount = results[2];
            if (tieCount > 1) {
                setResults("Tie!");
            } else if (winnerId === myPartyId) {
                setResults(`You won for $${winnerAmount}`);
            } else {
                setResults("You lost");
            }
        });
    }
   
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const storeId = urlParams.get('id');
    console.log(storeId);
    
    const [title, setTitle] = useState(); 
    const [desc, setDesc] = useState(); 

    const [category, setCategory] = useState(); 

    const [brand, setBrand] = useState(); 
    const [images, setImages] = useState([]);

    const [results, setResults] = useState("");

    function pullJson() {
        fetch('https://dummyjson.com/products/' + storeId)
        .then(response => response.json())
        .then(responseData => {
            setTitle(responseData.title);
            setDesc(responseData.description);
            setCategory(responseData.category);
            setBrand(responseData.brand);
            setImages(responseData.images);
            //console.log(responseData.images)
            //console.log(setImages(responseData.images));
            //console.log(Array.isArray(responseData.images)); //renders true (is array)
        })
        //return
    }

    const [currentIndex, setCurrentIndex] = useState();
    function handleChange(index) {
        setCurrentIndex(index);
    }
    
    useEffect(() => {
        pullJson()
    }, [])  //{title} //{desc} //{brand} //{imagess} //{category}

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
            <Card.Header>&#128337; Ends </Card.Header>
            <Card.Body>
                    <Row>
                        <Col md={6}>
                            <aside>
                                <section>
                                    <Row>
                                    <div>
                                        <div style={{height: 450, width: 400 }}>
                                            <Carousel
                                                showArrows={true}
                                                autoPlay={true}
                                                infiniteLoop={true}
                                                interval="5000" 
                                                transitionTime="300"
                                                useKeyboardArrows={true}
                                                selectedItem={images[currentIndex]}
                                                onChange={handleChange}
                                            >
                                                {
                                                    images.map((image, index) => (
                                                        <div key={index}>
                                                        <img className="Img_sl" src={image} alt={index} />
                                                        </div>
                                                    ))
                                                }
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
                                    {title} 
                                </h2>
                                <div>
                                    <Card.Text style={{textAlign: "center"}}>
                                        <p>
                                            &#128129; Category: {category}
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
                                                    onChange={(e) => setBidValue(e.target.value)}
                                                    size="lg"
                                                />
                                            </Form.Group>
                                        </Row>

                                        <Row />

                                        <Button onClick={demoSubmit} as="input" size="lg" variant="outline-success" type="button" value="Submit" />
                                        <br/>
                                        <Button onClick={checkResults} as="input" size="lg" variant="outline-success" type="button" value="Check" />
                                        <p>{results}</p>
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
                <Card.Header>&#128337; Ends </Card.Header>
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