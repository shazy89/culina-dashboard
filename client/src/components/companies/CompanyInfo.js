import React from "react";
import PropTypes from "prop-types";

const CompanyInfo = ({ company: { name, email, adress, phone, timeZone } }) => {
  return (
    <div className="company__info">
      <div className="u-margin-top">
        <h3 className="company__info--header ">{name}</h3>
      </div>
      <div className="u-margin-top-big">
        <a className="font-size-normal" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
      <div className="u-margin-top">
        <p className="font-size-normal">
          Contact Number: {phone}
          <br />
          <br />
          {timeZone}
        </p>
      </div>
      <div>
        <p className="font-size-normal"> {adress}</p>
      </div>
    </div>
  );
};

CompanyInfo.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyInfo;
