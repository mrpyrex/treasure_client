import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import SignOut from "../Auth/SignOut";

const Navbar = ({ currentUser }) => {
  return (
    <Fragment>
      <div className="row">
        <div id="top-nav" className="col-md-12 text-center">
          <div id="logo">
            <Link to="/">
              <img src={logo} id="logo" alt="RCCG Treasure House, Eket" />
            </Link>
            {/* <h4>The Redeemed Chritian Church Of God</h4> */}
            <h4>Treasure House</h4>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages-and-sermons">
                Sermons
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/mission">
                  Our Mission
                </Link>
                <Link className="dropdown-item" to="/ministries">
                  Ministries
                </Link>
                <Link className="dropdown-item" to="/history">
                  History
                </Link>
                <Link className="dropdown-item" to="/leadership">
                  Leadership
                </Link>
                <Link className="dropdown-item" to="/house-care-fellowship">
                  HCF
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Give
              </Link>
            </li>

            {currentUser && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Welcome, {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <SignOut />
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
