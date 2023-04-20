import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import { Container, Row, Col, Card, Image, Button, ListGroup, Modal } from 'react-bootstrap';


const Testing = () => {

  function MyFunction() {
    window.location.replace("/")
  }

  return(
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
              <h1>The Window Location Object</h1>
              <h2>The replace Property</h2>

              <Button 
                onClick={() => {MyFunction()}} 
              >
                Replace document
              </Button>
            </article>
        </div>
    </Layout>
  );    
};

export default Testing;