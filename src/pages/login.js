import React, { useState } from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const LoginForm = () => {
  const [loginInfo, setloginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
      setloginInfo({...loginInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      
      console.log(loginInfo);

      setloginInfo({ username: "", password: ""});
  };

  return (
    <Layout>
        <div className="login-form">
            <div className="form-box solid">
            <form className="App">
                <h1 className="login-text">Login</h1>
                <label>Username</label>
                <br></br>
                <input 
                  style={{ color: 'white'}}
                  type="text" 
                  placeholder="Enter Username" 
                  name="username" 
                  className="login-box" 
                  id="inputID" 
                  value={loginInfo.username} 
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
                  value={loginInfo.password} 
                  onChange={handleChange}
                />
                <br></br>
                <input type="Submit" value="Login" className="login-btn" onClick={handleSubmit}/>
            </form>
            </div>
        </div>
    </Layout>
  );
};

export default LoginForm;