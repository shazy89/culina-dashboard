import React from "react";
import PropTypes from "prop-types";
import CompanyInfo from "./CompanyInfo";
import EditCompanyCard from "./forms/EditCompanyCard";
import { Edit, X } from "react-feather";
const CompanyLeft = ({ edit, setEdit, company, className }) => {
  return (
    <>
      <div className="company__edit">
        {!edit && (
          <Edit
            className="company__edit--button"
            onClick={() => setEdit(true)}
          ></Edit>
        )}

        {edit && (
          <X
            className="company__edit--button"
            onClick={() => setEdit(false)}
          ></X>
        )}
      </div>
      {!edit ? (
        <CompanyInfo company={company} />
      ) : (
        <EditCompanyCard
          company={company}
          className={className}
          setEdit={setEdit}
        />
      )}
    </>
  );
};

CompanyLeft.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyLeft;
