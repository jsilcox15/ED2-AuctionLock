import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';


const View = ({ data }) => {
  return (
    <Layout>
        <div className="container">
        <h2> A new auction has been created!!! </h2>
        <p> How exciting! </p>
        <p> Here is the auction you created! </p>
            <Container>
                <Row>
                    <Col md={4}>
                    <div style={{ padding: 10 }}>
                        <Card className="text-center" style={{border: "1px solid gray"}}>
                            <Card.Header>Fresh Auctions &#127881;</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <h3>
                                        Product Name: {data?.productName}
                                    </h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        Manufacturer: {data?.Manufacturer}
                                        <p></p>
                                        Brand Name: {data?.brandName}
                                        <p></p>
                                        <p>Description: {data?.Description}</p>
                                    </p>
                                </Card.Text>
                                <Button variant="outline-success" size="lg" href="/bidPages">
                                    Enter Auction
                                </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">Started -- ago</Card.Footer>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Layout>
  );
};

export default View;