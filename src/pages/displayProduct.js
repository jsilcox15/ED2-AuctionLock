import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from "../components/common";
//import { Container } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const displayProduct = ({ userData }) => {
  return (
        <div className="DP_cards">
                    <Card 
                      style={{border: "1px solid gray", height: 500, width: 230 }}
                    >
                    <Card.Header style={{textAlign: "center"}}>Hot Bids &#128293;</Card.Header>
                    <Card.Img 
                      variant="top" 
                      src={userData.picture.medium} 
                      style={{ height: 180, width: 230 }}
                    />
                    <Card.Body>
                        <Card.Title>
                          <h2 className="DP_cards__title">
                            Names: 
                          </h2>
                          <p>{userData.name.first} {userData.name.last}</p>
                        </Card.Title>
                        <Card.Text>
                            <p> Some quick example text to build on the card title and make up the bulk of the card's content. </p>
                        </Card.Text>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <Button variant="outline-success" size="lg" href="/bidPages" >
                            Enter Auction
                        </Button>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted" style={{textAlign: "center"}}>&#128337; Started </Card.Footer>
                    </Card>
        </div>
  )
};
export default displayProduct;