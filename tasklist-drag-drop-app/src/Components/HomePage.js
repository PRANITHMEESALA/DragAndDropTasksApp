import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import CardContainer from "./CardContainer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Header />
        <CardContainer />
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
