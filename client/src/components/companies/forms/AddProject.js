import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Back from "components/reusable/Back";
import ProjectFormFields from "./ProjectFormFields";
const AddProject = ({ history }) => {
  return (
    <>
      <div>
        <Back history={history} />
      </div>

      <h1 className="u-margin-top-3 text-center">New Project</h1>
      <ProjectFormFields />
    </>
  );
};

export default AddProject;
