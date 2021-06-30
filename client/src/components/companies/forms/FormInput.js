import React from "react";
import { Row, Col } from "react-bootstrap";

const FormInput = ({ onChange }) => {
  return (
    <>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="name">
            Name
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="name"
            id="name"
            type="text"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="email">
            Email
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="email"
            id="email"
            type="email"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="adress">
            Adress
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="adress"
            id="adress"
            type="text"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="phone">
            Contact Number
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="phone"
            id="phone"
            type="text"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="timeZone">
            Time Zone
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="timeZone"
            id="timeZone"
            type="text"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2">
          <label className="input--label u-margin-top" name="logo">
            Logo
          </label>
        </Col>
        <Col sm="8">
          <input
            onChange={onChange}
            name="logo"
            id="logo"
            type="file"
            className="input--field u-margin-top"
          />
        </Col>
      </Row>
    </>
  );
};

export default FormInput;
