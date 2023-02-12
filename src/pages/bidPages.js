import React, { useState } from "react";
//import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "../components/common";
//import { Container } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import unknownImg from "../images/import-image.png";

const BidPages = () => {
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
            <div className="container">
            <Card>
                <Card.Body>
                    <Card.Title style={{ textAlign: `center` }}><h1>... Item</h1></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <form>
                            <label>
                                Bid Amount: $
                                <input type="text" name="name" placeholder="Enter Your Bid Amount" onChange={(e) => setBidValue(e.target.value)}/>
                            </label>
                            <br/>
                            <label>
                                Party ID
                                <input type="text" name="name" placeholder="id" onChange={(e) => setPartyId(e.target.value)}/>
                            </label>
                            <br/>
                            <Button onClick={demoSubmit} as="input" size="lg" variant="outline-success" type="button" value="Submit" />
                        </form>
                    </ListGroup.Item>
                </ListGroup>
                <p id="testoutput"></p>
            </Card>
            </div>
        </Layout>
    );
}

export default BidPages;