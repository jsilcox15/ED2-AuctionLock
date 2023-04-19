import React, { useState } from "react";
import { Link } from "gatsby";
//import { Layout } from "../components/common";
import { Layout, Navigation } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
//import { Form, FloatingLabel } from 'react-bootstrap';
//import { isNull } from "lodash";
import { RegisterForm } from "../pages/register.js";



function Item({ name, isRegistered, color}) {

  if (isRegistered) {
    return null;
  }
  return(
      <Button variant={color} size="lg" >
            {name}
      </Button>
  );
}


export default function PackingList() {

  //you can put the local function to check for user authentication
  //let itemContent = "Testing"

  
  return (
    <Layout>
      <div className="container">
        <section>
          <h1>Testing List of Buttons</h1>
          <ul>
            <Link
                className="site-nav-react-button"
                style={{fontWeight: "bold"}}
                to="/login"
            > 
              <Item 
                name="Login"                 
                isRegistered={true} 
                color="success"
              />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/register"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={false} 
                name="Sign Up" 
                color="success"
                />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/cards"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={true} 
                name="My Account" 
                color="light"
                />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/404"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={false} 
                name="Log Out" 
                color="light"
                />
            </Link>
          </ul>
        </section>
      </div>
    </Layout>
  );
}