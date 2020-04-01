import React, { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import Services from "../components/Services";
import Wisdom from "../components/Wisdom";

const Home = () => {
  return (
    <Fragment>
      <Jumbotron />
      <Services />
      <Wisdom />
    </Fragment>
  );
};

export default Home;
