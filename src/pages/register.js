import React, { useState } from "react";
//import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

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
      
      console.log(userInfo);

      setUserInfo({ user: "", status: "", password: "", confirmPass: "" });
  };

  return (
    <Layout>
        <div className="login-form">
            <div className="form-box solid">
            <form className="App">
                <h1 className="login-text">Sign Up</h1>
                <label>Are you a Seller or a Buyer?</label>
                <br></br>
                <input
                  style={{ color: 'white'}} 
                  type="text" 
                  name="status" 
                  placeholder="Seller or Buyer" 
                  className="login-box" 
                  value={userInfo.status} 
                  onChange={handleChange}
                  //onChange={(e) => setStatus(e.target.value)} 
                />
                <br></br>
                <label>Username</label>
                <br></br>
                <input 
                  style={{ color: 'white'}}
                  type="text" 
                  placeholder="Enter Username" 
                  name="user" 
                  className="login-box" 
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