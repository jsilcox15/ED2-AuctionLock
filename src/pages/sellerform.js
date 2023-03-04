import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

const SellerForm = () => (
    <Layout>
        <div className="container">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="productName">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}> Product Name: </Form.Label>
                        <Form.Control type="text" placeholder="What is the Product Name?" size="lg"/>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Manufacturer">
                        <Form.Label style={{ color: 'black', textAlign:'left' }}> Manufacturer: </Form.Label>
                        <Form.Control type="text" placeholder="Who is the Manufacturer?" size="lg"/>
                        <Form.Text>
                            Required
                        </Form.Text>
                    </Form.Group>
                </Row>

                <Row><p></p></Row>

                <Form.Group className="mb-3" controlId="brandName">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> Brand Name: </Form.Label>
                    <Form.Control type="text" placeholder="What is the brand name?" size="lg" />
                    <Form.Text>
                        Required
                    </Form.Text>
                </Form.Group>

                <Row><p></p></Row>

                <Form.Group className="mb-3"  controlId="Description">
                    <Form.Label style={{ color: 'black', textAlign:'left' }}> Description: </Form.Label>
                    <Form.Control as="textarea" placeholder="Please describe the product?" rows={4} />
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

                <Button variant="outline-success" type="submit" size="lg">
                    Submit
                </Button>
            </Form>
        </div>
    </Layout>
);

export default SellerForm;