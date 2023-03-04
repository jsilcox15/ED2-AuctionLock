import * as React from "react";
//import { Link, StaticQuery } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, ListGroupItem } from 'react-bootstrap';
import { Layout } from "../components/common";
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
//import { GatsbyImage } from "gatsby-plugin-image"

//import { useStaticQuery, graphql } from "gatsby";


import carImg from "../images/car_box1.png";
import phoneImg from "../images/phone_box2.png";
import scaleImg from "../images/laptop_box.png";


const NotFoundPage = () => (
    <Layout>
    <div className="container">
            <Card>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img 
                            className="d-block w-100" 
                            src={carImg} 
                            alt="trial01" 
                            style={{ width: 400, height: 400 }}
                        />
                        <Carousel.Caption>
                            <p>
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={scaleImg} 
                            className="d-block w-100"
                            alt="trial02" 
                            style={{ width: 400, height: 400 }}
                        />
                        <Carousel.Caption>
                                <p>
                                </p>
                        </Carousel.Caption>            
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            src={phoneImg} 
                            alt="trial03" 
                            className="d-block w-100"
                            style={{ width: 400, height: 400 }} 
                        />
                        <Carousel.Caption>
                            <p>
                            </p>
                        </Carousel.Caption>            
                    </Carousel.Item>
                </Carousel>
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
                        </form>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </div>
        </Layout>
);

export default NotFoundPage;
