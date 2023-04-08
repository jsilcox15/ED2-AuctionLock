import React, { useState } from "react";
//import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import { Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button, ListGroup } from 'react-bootstrap';

import Axios from "axios";

const RegisterForm = () => { 
  //const [user, setUser] = useState('');
  //const [status, setStatus] = useState('');
  //const [pass, setPass] = useState('');
  //const [confirmPass, setConfirmPass] = useState('');

  const [userInfo, setUserInfo] = useState({
    user: "",
    status: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (event) => {
      setUserInfo({...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();

      Axios.post("http://localhost:9999/register", {
        username: userInfo.user,
        password: userInfo.password,
      }, {
          withCredentials: true
      }).then((response) => {
        console.log(response);
      });

      setUserInfo({ user: "", status: "", password: "", confirmPass: "" });
  };

  return (
    <Layout>
        <div className="login-form">
            <div className="form-box solid">
            <form className="App">
                <h1 className="login-text">Sign Up</h1>
                <Form.Group controlId="status">
                        <Form.Label> 
                            Are you a Seller or a Buyer? 
                        </Form.Label>
                        <Form.Select 
                            defaultValue="Choose..."
                            style={{ color: 'white'}}
                            size="lg"
                            name="status" 
                            placeholder="Seller or Buyer" 
                            className="login-box" 
                            value={userInfo.status} 
                            onChange={handleChange}
                        >
                            <option style={{ color: 'black'}}> Choose...</option>
                            <option style={{ color: 'black'}} value="Seller">Seller</option>
                            <option style={{ color: 'black'}} value="Buyer">Buyer</option>
                        </Form.Select>
                </Form.Group>
                <br></br>
                <label>Username</label>
                <br></br>
                <input 
                  style={{ color: 'white'}}
                  type="text" 
                  placeholder="Enter Username" 
                  name="user" 
                  className="login-box"
                  id="inputID" 
                  value={userInfo.user} 
                  onChange={handleChange}
                />
                <br></br>
                <label>Password</label>
                <br></br>
                <input 
                  style={{ color: 'white'}}
                  type="password" 
                  placeholder="Enter Password" 
                  name="password" 
                  className="login-box" 
                  id="inputID" 
                  value={userInfo.password} 
                  onChange={handleChange}
                />
                <br></br>
                <label>Re-enter Password</label>
                <br></br>
                <input 
                  style={{ color: 'white'}}
                  type="password" 
                  placeholder="Re-enter Password" 
                  name="confirmPass" 
                  className="login-box" 
                  id="inputID" 
                  value={userInfo.confirmPass} 
                  onChange={handleChange}
                />
                <br></br>
                <input type="Submit" value="Register" className="login-btn" onClick={handleSubmit} />
            </form>
            </div>
        </div>
    </Layout>
  );
};

export default RegisterForm;