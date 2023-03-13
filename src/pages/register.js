import React, { useState } from "react";
//import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const RegisterForm = ({ isShowRegister }) => { 
  const [user, setUser] = useState('');
  const [status, setStatus] = useState('');
  const [pass, setPass,] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function SignIn() {
    const SUBMIT = 0;
  }

  return (
    <Layout>
        <div className={`${isShowRegister ? "active" : ""} show`}>
        <div className="login-form">
            <div className="form-box solid">
            <form className="App">
                <h1 className="login-text">Sign Up</h1>
                <label>Are you a Seller or a Buyer?</label>
                <br></br>
                <input type="text" name="input" placeholder="Seller or Buyer" className="login-box" value={user} onChange={(e) => setStatus(e.target.value)} />
                <br></br>
                <label>Username</label>
                <br></br>
                <input type="text" placeholder="Enter Username" name="username" className="login-box" value={status} onChange={(e) => setUser(e.target.value)}/>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" placeholder="Enter Password" name="password" className="login-box" value={pass} onChange={(e) => setPass(e.target.value)}/>
                <br></br>
                <label>Re-enter Password</label>
                <br></br>
                <input type="password" placeholder="Re-enter Password" name="password" className="login-box" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                <br></br>
                <input type="submit" value="Register" className="login-btn" onClick={SignIn} />
            </form>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default RegisterForm;