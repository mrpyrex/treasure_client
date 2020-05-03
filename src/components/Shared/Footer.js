import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer" className="container bg-dark text-center">
      <div className="row">
        <div className="col-md-4">
          <div className="mb-4">
            <h3>Treasure House</h3>
            <small>
              "A Home Where Riches And Righteousness Dwell Together"
            </small>
            <p>KM 3, Eket-Oron Road, Ikot Ibiok, Eket, Akwa Ibom</p>
            <ul id="social" className="mt-3">
              <li className="">
                <Link to="#">
                  <span>
                    <i className="fab fa-facebook-f"></i>
                  </span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <span>
                    <i className="fab fa-youtube"></i>
                  </span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <span>
                    <i className="fab fa-instagram"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Service Times</h3>

          <ul>
            <li>Sunday Service &mdash; 9:00 AM To 11:30 Am</li>
            <li>Digging Deep &mdash; 6:00 PM To 7:30 PM</li>
            <li>Faith Clinic &mdash; 6:00 PM To 7:30 PM</li>
          </ul>
        </div>
        {/* <div id="map" className="col-md-4">
          <h3>Map?</h3>
        </div> */}
      </div>
      <div className="row">
        <p className="mx-auto my-2">
          {new Date().getFullYear()} &copy; The Redeemed Christian Church Of
          God, Treasure House. <Link to="/privacy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
