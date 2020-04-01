import React from "react";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

const Jumbotron = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div id="intro">
        <div className="row animate-box">
          <div className="col-md-12 col-md-offset-0 text-center">
            <h2>Jesus, The Same Yesterday, Today And Forever!</h2>
            <span>Hebrews 13 : 8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
