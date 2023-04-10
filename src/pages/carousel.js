import React, { useState } from "react";
import { Link } from "gatsby";
//import { Layout } from "../components/common";
import { Navigation } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';
import { isNull } from "lodash";

function Item({ name, isRegistered }) {

  if (isRegistered) {
    return null;
  }
  return(
      <Button variant="success" size="lg" >
            {name}
      </Button>
  );
}


const PackingList = () => {

  //you can put the local function to check for user authentication
  let itemContent = "Testing"
  const myFunction = () => {
    if (itemContent.startsWith("T")) {
      //if the user is logged in disappear
      return true;  // true -- disappear
    }
    //if the user is not logged in / sign up the login should show up
    return false;  //false -- show up
  }

  return (
    <Navigation>
      <div className="container">
        <section>
          <h1>Testing The integration of Buttons</h1>
          <ul>
            <Link
                className="site-nav-react-button"
                style={{fontWeight: "bold"}}
                to="/login"
            > 
              <Item 
                name="Login"                 
                isRegistered={myFunction} 
              />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/register"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={myFunction} 
                name="Sign Up" 
                />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/cards"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={false} 
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
                isRegistered={false} 
                name="Log Out" 
                />
            </Link>
          </ul>
        </section>
      </div>
    </Navigation>
  );
}

export default PackingList;
