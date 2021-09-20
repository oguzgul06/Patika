import axios from "axios";
import React from "react";
import "./service.css";

function service() {
  const getData = async () => {
    let userIdDOM = document.querySelector("#userID");
    let id = userIdDOM.value;
    console.log("useID:" + id);
    const users = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    let divDOM = document.querySelector("#text");
    let pDOM = document.createElement("p");
    pDOM.innerHTML =
      users.data.name +
      "<br/>" +
      users.data.username +
      "<br/>" +
      users.data.email +
      "<br/>" +
      users.data.phone +
      "<br/>" +
      users.data.website +
      "<br/>" +
      users.data.company.name +
      "<br/> <br/>";
    /* Object.keys(users).forEach(item => {pDOM.innerHTML = `${item} = ${users[item]}`}) */
    divDOM.appendChild(pDOM);

    console.log(users.data);
  };

  return (
    <div className="service">
      <div className="input">
        <input
          id="userID"
          type="text"
          placeholder="Please Enter a number for getUser"
        />
      </div>
      <button className="button" onClick={getData}>
        Data
      </button>
      <div id="text"></div>
    </div>
  );
}

export default service;
