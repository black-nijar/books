import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Auth from "./Auth";

class Navbar extends Component {
  render() {
    return (
      <div className="ui navbar" style={{ marginBottom: "50px" }}>
        <nav className="navbar fixed-top navbar-dark bg-dark ">
          <div className="ui container">
            <Link to="/books" className="navbar-brand">
              <h4>Books</h4>
            </Link>
            <ul className="nav">
              <Link to="/mycart" className="mycart">
                <h6>My Cart</h6>
              </Link>
              <Link to="/userprofile" className="Profile">
                <h6>Profile</h6>
              </Link>
              {/* <Auth /> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
