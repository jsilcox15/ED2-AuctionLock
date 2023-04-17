import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";

import { Layout } from "../components/common";
//import { Container } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
//import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const displayProduct = ({ userData }) => {
  return (
      <Link to ={"/Bidding?id=" + userData.id} style={{ textDecoration: 'none', color: 'black'}}>
        <div className="DP_cards">
                    <Card 
                      style={{border: "1px solid gray", height: 500, width: 230 }}
                    >
                    <Card.Header style={{textAlign: "center"}}>Hot Bids &#128293;</Card.Header>
                    <Card.Img 
                      variant="top" 
                      src={"http://localhost:9999/uploads/" + userData.thumbnail}  
                      style={{ height: 180, width: 230 }}
                    />
                    <Card.Body>
                        <Card.Title>
                        <h2 className="DP_cards__title">
                            {userData.title} 
                          </h2>
                        </Card.Title>
                        <Card.Text>
                            <p>Category: {userData.category} </p>
                        </Card.Text>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <Button variant="outline-success" size="lg" href={"/Bidding?id=" + userData.id} >
                            Enter Auction
                        </Button>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted" style={{textAlign: "center", color: 'black'}}>&#128337; Ends </Card.Footer>
                    </Card>
        </div>
    </Link>
  )
};
export default displayProduct;