import React, { useState } from "react";
import { Link } from "gatsby";
//import { Layout } from "../components/common";
import { Navigation } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

const CheckOut = () => {
    const [userInfo, setUserInfo] = useState({
        fname: "",
        lname: "",
        cardNumber: "",
        Month: "",
        Year: "",
        CVV: ""
    });

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(userInfo);

        setUserInfo({ fname: "", lname: "", cardNumber: "", Month: "", Year: "", CVV: "" });
    };
    

    return (
        <Navigation>
            <div className="container">
                <h1 align="center"> Check Out &#128722;</h1>

                <Row><p></p></Row>

                <p></p>
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="FirstName">
                            <Form.Label style={{ color: 'black', textAlign:'left' }}> First Name: </Form.Label>
                            <Form.Control 
                                type="text" 
                                name="fname" 
                                value={userInfo.fname} 
                                onChange={handleChange} 
                                placeholder="First Name" 
                                size="lg"
                            />
                            <Form.Text>
                                Required
                            </Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="LastName">
                            <Form.Label style={{ color: 'black', textAlign:'left' }}> Last Name: </Form.Label>
                            <Form.Control 
                                type="text" 
                                name="lname" 
                                value={userInfo.lname} 
                                onChange={handleChange} 
                                placeholder="Last Name" 
                                size="lg"
                            />
                            <Form.Text>
                                Required
                            </Form.Text>
                        </Form.Group>
                    </Row>

                    <Row><p></p></Row>

                    <Form.Group as={Col} controlId="cardNumber">
                            <Form.Label style={{ color: 'black', textAlign:'left' }}> Card Number: </Form.Label>
                            <Form.Control 
                                type="number" 
                                name="cardNumber" 
                                value={userInfo.cardNumber} 
                                onChange={handleChange} 
                                placeholder="Credit card number" 
                                size="lg"
                            />
                            <Form.Text>
                                Required
                            </Form.Text>
                        </Form.Group>

                    <Row><p></p></Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Month">
                            <Form.Label style={{ color: 'black', textAlign:'left' }}> Month: </Form.Label>
                            <Form.Select 
                                defaultValue="Choose..." 
                                size="lg"
                                name="Month"
                                value={userInfo.Month} 
                                onChange={handleChange} 
                            >
                                <option>Choose...</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </Form.Select>
                            <Form.Text>
                                Required
                            </Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="Year">
                            <Form.Label style={{ color: 'black', textAlign:'left' }}> Year: </Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Card expiry year" 
                                name="Year" 
                                value={userInfo.Year} 
                                onChange={handleChange} 
                                size="lg"
                            />
                            <Form.Text>
                                Required
                            </Form.Text>
                        </Form.Group>

                        <Form.Group as={Col} controlId="CVV">
                            <Form.Label style={{ color: 'black', textAlign:'left' }}> CVV: </Form.Label>
                            <Form.Control 
                                type="number" 
                                name="CVV" 
                                value={userInfo.CVV} 
                                onChange={handleChange} 
                                placeholder="CVV (3 digits)" 
                                size="lg"
                            />
                            <Form.Text>
                                Required
                            </Form.Text>
                        </Form.Group>

                    </Row>

                    <Row><p></p></Row>

                    <Button variant="outline-success" type="Submit" size="lg">
                        Submit
                    </Button>
                </Form>
            </div>
        </Navigation>
    );
};

export default CheckOut;
