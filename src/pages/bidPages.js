import * as React from "react";
//import { Link } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "../components/common";
//import { Container } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import unknownImg from "../images/import-image.png";


const bidPages = () => (
    <Layout>
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
                <ListGroup.Item>Current Highest Bid: $0.00</ListGroup.Item>
                <ListGroup.Item>
                <form>
                    <label>
                        Bid Amount: $
                        <input type="text" name="name" placeholder="Enter Your Bid Amount" />
                    </label>
                    <Button as="input" size="lg" variant="outline-success" type="submit" value="Submit" />
                </form>
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
    </Layout>
);

export default bidPages;