import React from "react";
import { Button } from "react-bootstrap";

const Back = ({ history }) => {
  return (
    <div className="navigate__back">
      <Button
        className="btn-features navigate__back-btn"
        variant="light"
        onClick={history.goBack}
      >
        <span>&lt;&lt;</span> Back
      </Button>
    </div>
  );
};

export default Back;
