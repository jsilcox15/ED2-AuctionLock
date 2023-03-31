import React, { useState, useRef, useEffect } from "react";
import { Layout } from "../components/common";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarousekTrail from "../pages/CarousekTrail.js";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://dummyjson.com/products");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.products);
      setUsers(userData.products);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.title} ${user.category}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <Layout>
      <div className="format">
        <div class="search-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <form class="no-submit">
                <input class="no-submit" type="search" placeholder="Search Names and Categories..." onInput={filterCards} />
            </form>
        </div>
        <div><p></p></div>
        <div className="box_space">
            {users.map((user, id) => (
                <CarousekTrail key={id} userData={user} />
              ))}
          </div>
      </div>
    </Layout>
  );
}

export default App;

