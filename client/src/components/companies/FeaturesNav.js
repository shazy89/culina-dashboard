import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Modal } from "react-bootstrap";

const FeaturesNav = (props) => {
  return (
    <>
      <Button className="btn-features" variant="primary">
        All Projects
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
      <Button className="btn-features" variant="success">
        Success
      </Button>
    </>
  );
};

FeaturesNav.propTypes = {};

export default FeaturesNav;
