import React from "react";

const House = ({ house }) => {
  return (
    <div className="col-md-6 col-lg-4 my-2">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{house.name}</h4>
          <p class="card-text">
            <i class="fas fa-map-marker-alt"></i> {house.address}
          </p>
          <p class="card-text">
            {" "}
            <i class="far fa-user"></i> {house.host}{" "}
          </p>
          <p class="card-text">
            <i class="fas fa-phone"></i> {house.phone}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default House;
