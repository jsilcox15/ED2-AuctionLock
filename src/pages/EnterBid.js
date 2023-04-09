import React, { useState } from "react";
import { Link } from "gatsby";
//import { Layout } from "../components/common";
import { Navigation } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

function Item({ name, isRegistered }) {
  if (isRegistered) {
    return null;
  }
  //false -- show up
  // true -- disappear
  return(
      <Button variant="success" size="lg" >
            {name}
      </Button>
  );
}

export default function PackingList() {
  return (
    <Navigation>
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
                isRegistered={false} 
                name="Login" 
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
                />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/carousel"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={true} 
                name="My Account" 
                />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/404"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={true} 
                name="Log Out" 
                />
            </Link>
          </ul>
        </section>
      </div>
    </Navigation>
  );
}