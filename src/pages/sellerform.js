//import * as React from "react";
import React, { useState } from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

const SellerForm = () => {

    const [sellerInfo, setSellerInfo] = useState({
        productName: "",
        Manufacturer: "",
        brandName: "",
        Description: "",
    });

    const handleChange = (event) => {
        setSellerInfo({...sellerInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log(sellerInfo);

        setSellerInfo({ productName: "", Manufacturer: "", brandName: "", Description: "" });
    };
    

    return (
    <Layout>
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="productName">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}> Product Name: </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="productName" 
                            value={sellerInfo.productName} 
                            onChange={handleChange} 
                            placeholder="What is the Product Name?" 
                            size="lg"
                        />
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Manufacturer">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}> Manufacturer: </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="Manufacturer" 
                            value={sellerInfo.Manufacturer} 
                            onChange={handleChange} 
                            placeholder="Who is the Manufacturer?" 
                            size="lg"
                        />
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>
                </Row>

                <Row><p></p></Row>

                <Form.Group className="mb-3" controlId="brandName">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> Brand Name: </Form.Label>
                    <Form.Control 
                        type="text" 
                        name="brandName" 
                        value={sellerInfo.brandName} 
                        onChange={handleChange} 
                        placeholder="What is the brand name?" 
                        size="lg" 
                    />
                    <Form.Text>
                        Required
                    </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Form.Group className="mb-3"  controlId="Description">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> Description: </Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Please describe the product." 
                        name="Description" 
                        value={sellerInfo.Description} 
                        onChange={handleChange} 
                        size="lg" 
                        rows={4} 
                    />
                    <Form.Text>
                        Required
                    </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Condition">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}> Is the Condition Excellence, Fair, or Poor? </Form.Label>
                        <Form.Select defaultValue="Choose..." size="lg">
                            <option>Choose...</option>
                            <option value="1">Excellence</option>
                            <option value="2">Fair</option>
                            <option value="3">Poor</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="productType">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}>What type of Product are you selling?</Form.Label>
                        <Form.Select defaultValue="Choose..." size="lg">
                            <option>Choose...</option>
                            <option value="1">Clothing & Shoes</option>
                            <option value="2">Cars & Parts</option>
                            <option value="3">Appliances & Parts</option>
                            <option value="4">Other</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Security">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}>Security</Form.Label>
                        <Form.Select defaultValue="Choose..." size="lg">
                            <option>Choose...</option>
                            <option value="1">Show who the winner is</option>
                            <option value="2">Hide who the winner is</option>
                        </Form.Select>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                </Row>

                <Row><p></p></Row>

                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}>Upload Images of Product</Form.Label>
                    <Form.Control type="file" size="lg" />
                    <Form.Text>
                        You can upload one or more images.
                        Required
                    </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Button variant="outline-success" type="Submit" size="lg">
                    Submit
                </Button>
            </Form>
        </div>
    </Layout>
    );
};

export default SellerForm;