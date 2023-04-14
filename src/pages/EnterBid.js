import React, { useState } from "react";
import { Link } from "gatsby";
//import { Layout } from "../components/common";
import { Navigation } from "../components/common";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';
//import { Form, FloatingLabel } from 'react-bootstrap';
//import { isNull } from "lodash";

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


export default function PackingList() {

  //you can put the local function to check for user authentication
  let itemContent = "Testing"

  const notRegistered = () => {//if the user is not logged in / sign up the login should show up
    if (itemContent.startsWith("T")) { //((authentic == true)) 
      
      return true;  // true -- disappear
    }
    else{ //((authentic == null)) //(sign up / login appear)
      return false; //appear if authentication is false
    } 
  }
  const Registered = () => {
    if (itemContent.startsWith("T")) { //(authentic == false)
      return true;  // true -- if the user is not logged in disappear
    }
    else{ //else it should appear
      return false;
    }
  }
  
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
                name="Login"                 
                isRegistered={notRegistered} 
              />
            </Link>
            {' '}
            <Link
                className="site-nav-react-button"
                to="/register"
                style={{fontWeight: "bold"}}
            > 
              <Item 
                isRegistered={notRegistered} 
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
                isRegistered={Registered} 
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
                isRegistered={Registered} 
                name="Log Out" 
                />
            </Link>
          </ul>
        </section>
      </div>
    </Navigation>
  );
}