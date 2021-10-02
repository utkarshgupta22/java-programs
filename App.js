import "./styles.css";
import logo from "./logo.png";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <>
      <header className="app">
        <title>Hariket Sheth : Task 2 </title>
        <img className="lgm" src={logo} alt="LetsGrowMore" />
        <div className="btn" onClick={getUsers}>
          Get Users
        </div>
      </header>
      <div className="task">
        <h3></h3>
        <p>Name: Utkarsh Gupta</p>
        <p>Task: #2 - Intermediate Level Task </p>
        <p>
          Description: Click the given button to fetch the users from the API.
        </p>
      </div>
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;


