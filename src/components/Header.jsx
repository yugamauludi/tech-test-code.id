import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import {Link} from "react-router-dom"
import logoJenius from "../assets/jenius-logo.png";

export default function HeaderBar() {
  const [activeButton, setActiveButton] = useState("Home");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="">
          <img src={logoJenius} width="120" alt="" />
        </a>
        <h3 className="ms-3 mb-0 flex-grow-1 text-center">Jenius Data User</h3>
        <div className="ml-auto">
        <Link to={"/"}>
          <button
            type="button"
            className={`btn btn-outline-primary ${activeButton === "Home" ? "btn-primary" : "btn-outline-primary"}`}
            style={{ marginRight: 5 }}
            onClick={() => handleButtonClick("Home")}
          >
            Home
          </button>
        </Link>
        <Link to={"/add-contact"}>

          <button
            type="button"
            className={`btn btn-outline-primary ${activeButton === "AddUser" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => handleButtonClick("AddUser")}
          >
            Add New User
          </button>
        </Link>
        </div>
      </div>
    </Navbar>
  );
}

// export default HeaderBar;
