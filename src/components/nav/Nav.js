import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <img src={logo} alt="React-LOGO" />
        <ul className="List">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
