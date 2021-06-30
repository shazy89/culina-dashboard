import React from "react";
import { Link } from "react-router-dom";
import Slider from "components/layout/Slider";
import CompanyUserCard from "./companyUsers/CompanyUserCard";
import { Button } from "react-bootstrap";
import AllUsersModal from "./companyUsers/AllUsersModal";
import ProjectsTable from "./project/ProjectsTable";
import PropTypes from "prop-types";

const CompanyRight = ({ company, id, show, handleClose, handleShow }) => {
  return (
    <>
      <div className="slider_company">
        <h2 className="slider_company__header">
          {company.name} - Employee List
        </h2>
        {company.users.length ? (
          <Slider
            companyId={company._id}
            component={CompanyUserCard}
            info={company.users}
          />
        ) : (
          <h2>
            Please{" "}
            {
              <Link
                to={{
                  pathname: `/companies/${id}/newuser`,
                  state: { companyName: company.name }
                }}
              >
                add
              </Link>
            }{" "}
            users to this company
          </h2>
        )}
      </div>
      <div className="view-all u-margin-top-3">
        {company.users.length ? (
          <Button size="lg" variant="link" onClick={handleShow}>
            View All
          </Button>
        ) : (
          ""
        )}
        <AllUsersModal
          show={show}
          handleClose={handleClose}
          info={company.users}
          companyId={company._id}
        />
      </div>

      <div className="projects__table u-margin-top-3 slider_company__header">
        <h2>{company.name} Projects</h2>
        <ProjectsTable projects={company.projects} />
      </div>
    </>
  );
};

CompanyRight.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyRight;
