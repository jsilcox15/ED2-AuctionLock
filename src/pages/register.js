import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const RegisterForm = ({ isShowRegister }) => { 
  return (
    <Layout>
        <div className={`${isShowRegister ? "active" : ""} show`}>
        <div className="login-form">
            <div className="form-box solid">
            <form className="App">
                <h1 className="login-text">Sign Up</h1>
                <label>Are you a Seller or a Buyer?</label>
                <br></br>
                <input type="text" placeholder="Seller or Buyer" name="input" className="login-box" />
                <br></br>
                <label>Username</label>
                <br></br>
                <input type="text" placeholder="Enter Username" name="username" className="login-box" />
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" placeholder="Enter Password" name="password" className="login-box" />
                <br></br>
                <label>Re-enter Password</label>
                <br></br>
                <input type="password" placeholder="Re-enter Password" name="password" className="login-box" />
                <br></br>
                <input type="submit" value="Register" className="login-btn" href="/index"/>
            </form>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default RegisterForm;