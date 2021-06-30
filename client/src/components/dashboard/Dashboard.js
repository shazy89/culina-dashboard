import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

const Dashboard = ({ isAuthenticated }) => {
  return (
    <div>
      <h1>HellO there</h1>
    </div>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapStateToProps)(Dashboard);
