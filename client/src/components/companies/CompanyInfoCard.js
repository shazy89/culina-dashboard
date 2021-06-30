import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompanyInfoCard = ({ company }) => {
  return (
    <Link
      className="card__link"
      key={company._id}
      to={{
        pathname: `/companies/${company._id}`
        //  company
      }}
    >
      <Card className="card__text">
        <Card.Body>
          <Card.Title className="company__header-text">
            {company.name}
          </Card.Title>
          <Card.Text className="company__paragraph-text">
            {company.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

CompanyInfoCard.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyInfoCard;
