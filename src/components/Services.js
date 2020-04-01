import React from "react";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic6 from "../images/pic6.jpg";

const Services = () => {
  return (
    <div id="services" className="container">
      <div id="service-top" className="row">
        <div className="text-center my-4">
          <h2>Services</h2>
          <p>
            Dignissimos asperiores vitae velit veniam totam fuga molestias
            accusamus alias autem provident. Odit ab aliquam dolor eius.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <img className="img-responsive" src={pic1} alt="Sunday Service" />

          <div className="desc">
            <h3>Sunday Service</h3>
            <p>
              Dignissimos asperiores vitae velit veniam totam fuga molestias
              accusamus alias autem provident. Odit ab aliquam dolor eius.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <img className="img-responsive" src={pic6} alt="Digging Deep" />

          <div className="desc">
            <h3>Digging Deep</h3>
            <p>
              Dignissimos asperiores vitae velit veniam totam fuga molestias
              accusamus alias autem provident. Odit ab aliquam dolor eius.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <img className="img-responsive" src={pic2} alt="Payer Meeting" />

          <div className="desc">
            <h3>Faith Clinic</h3>
            <p>
              Dignissimos asperiores vitae velit veniam totam fuga molestias
              accusamus alias autem provident. Odit ab aliquam dolor eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
