import React from "react";
import Button from "@material-ui/core/Button";
import "./Navbar.css";

const Navigation = ({ onButtonSubmit }) => {
  const clicked = () => {
    onButtonSubmit(1);
  };
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a className="brand">LetsGrowMore Clients</a>{" "}
          <button onClick={clicked} className="button button1">
            Get Users
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
