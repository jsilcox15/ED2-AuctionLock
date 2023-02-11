import * as React from "react";
//import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "../components/common";
//import { Container } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import carImg from "../images/car_box1.png";
import phoneImg from "../images/phone_box2.png";
import scaleImg from "../images/laptop_box.png";
import unknownImg from "../images/import-image.png";



const HomePage = () => (
    <Layout>
        <div className="container">
        <h1> Just testing Card in React</h1>
        <p>I am wondering why I am having a difficult time getting the correct spacing</p>
        <p> Now lets see if this helps</p>
        <Container>
            <Row>
                <Col md={4}>
                <div style={{ padding: 10 }}>
                    <Card className="text-center" style={{border: "1px solid gray"}}>
                    <Card.Header>Popular Bids &#128293;</Card.Header>
                    <Card.Img variant="top" src={scaleImg} alt="scaleImage" style={{ height: 170 }} />
                    <Card.Body>
                        <Card.Title><h1>Card Title</h1></Card.Title>
                        <Card.Text>
                            <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </p>
                        </Card.Text>
                        <Button variant="outline-success" size="lg" href="/bidPages">
                            Enter Auction
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Started 2 hours ago</Card.Footer>
                    </Card></div>
                </Col>
                <Col md={4}>
                <div style={{ padding: 10 }}>
                    <Card className="text-center" style={{border: "1px solid gray"}}>
                    <Card.Header>Popular Bids</Card.Header>
                    <Card.Img variant="top" src={carImg} alt="carImage" style={{ height: 170 }}/>
                    <Card.Body>
                        <Card.Title><h1>Card Title</h1></Card.Title>
                        <Card.Text>
                            <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </p>
                        </Card.Text>
                        <Button variant="outline-success" size="lg" href="/bidPages">
                            Enter Auction
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Started 1 hour ago</Card.Footer>
                    </Card></div>
                </Col> 
                <Col md={4}>
                <div style={{ padding: 10 }}>
                    <Card className="text-center" style={{border: "1px solid gray"}}>
                    <Card.Header>Popular Bids</Card.Header>
                    <Card.Img variant="top" src={phoneImg} alt="laptopImage" style={{ height: 170 }}/>
                    <Card.Body>
                        <Card.Title><h1>Card Title</h1></Card.Title>
                        <Card.Text>
                            <p>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </p>
                        </Card.Text>
                        <Button variant="outline-success" size="lg" href="/bidPages">
                            Enter Auction
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Started 3 hours ago</Card.Footer>
                    </Card></div>
                </Col>
            </Row>
        </Container>
        </div>
    </Layout>
);

export default HomePage;
