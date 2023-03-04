import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const LoginForm = ({ isShowLogin }) => {
  return (
    <Layout>
        <div className={`${isShowLogin ? "active" : ""} show`}>
        <div className="login-form">
            <div className="form-box solid">
            <form className="App">
                <h1 className="login-text">Login</h1>
                <label>Username</label>
                <br></br>
                <input type="text" placeholder="Username or Email" name="username" className="login-box" />
                <br></br>
                <label>Password</label>
                <br></br>
                <input type="password" placeholder="Password" name="password" className="login-box" />
                <br></br>
                <input type="submit" value="Login" className="login-btn" href="/index"/>
            </form>
            </div>
        </div>
        </div>
    </Layout>
  );
};

export default LoginForm;