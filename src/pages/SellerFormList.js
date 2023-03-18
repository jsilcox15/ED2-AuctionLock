import React, { useState, useRef, useEffect } from "react";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayProduct from "../pages/displayProduct.js";


function App() {
  //const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      //setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []); //useEffect should not repeat so we use the empty array at the end of useeffect "[]"

  return (
    <Layout>
      <div className="format">
          <div className="box_space">
            {users.map((user, index) => (
                <DisplayProduct key={index} userData={user} />
              ))}
          </div>
      </div>
    </Layout>
  );
}

export default App;
