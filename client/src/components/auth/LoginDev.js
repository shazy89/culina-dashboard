import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { login } from "../../actions/auth";
import Alert from "../layout/Alerts";

const LoginDev = ({ login, isAuthenticated, alerts }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="login">
      <div className="culina__auth--card">
        <div className="culina__auth--header-div">
          <h1 className="culina__auth--header">Sign Into Culina Dev</h1>
        </div>
        <div className="u-margin-top-big">
          {alerts && <Alert />}
          <form className="culina__auth--form" onSubmit={onSubmit}>
            <div className="culina__auth--form-group">
              <label
                type="text"
                name="email"
                className="culina__auth--form-label"
              >
                Email Address
              </label>
              <input
                className="culina__auth--form-input"
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="culina__auth--form-group">
              <label
                className="culina__auth--form-label"
                type="text"
                name="password"
              >
                Password
              </label>
              <input
                className="culina__auth--form-input"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
              />
            </div>
            <Button type="submit" size="lg">
              Log In
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

LoginDev.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    alerts: state.alert
  };
};

export default connect(mapStateToProps, { login })(LoginDev);
